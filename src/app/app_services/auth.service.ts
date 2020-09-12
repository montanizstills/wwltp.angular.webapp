import { Injectable } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError, pipe } from 'rxjs';
import { tap, catchError, concatMap, shareReplay, toArray } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as env from "../../../ignore/env"
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // Create an observable of Auth0 instance of client
  auth0Client$ = (from(
    createAuth0Client({
      domain: "wwltp.auth0.com",
      client_id: env.AUTH0_CLIENT_ID,
      redirect_uri: `${window.location.origin}`,
      useRefreshTokens: true,
      prompt: "login"
    })
  ) as Observable<Auth0Client>).pipe(
    shareReplay(1), // Every subscription receives the same shared value
    catchError(err => throwError(err))
  );
  // Define observables for SDK methods that return promises by default
  // For each Auth0 SDK method, first ensure the client instance is ready
  // concatMap: Using the client instance, call SDK method; SDK returns a promise
  // from: Convert that resulting promise into an observable
  isAuthenticated$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated())),
    tap(res => this.loggedIn = res)
  );
  handleRedirectCallback$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );
  // Create subject and public observable of user profile data
  private userProfileSubject$ = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject$.asObservable();
  // Create a local property for login status
  loggedIn: boolean = null;

  constructor(private router: Router, private http: HttpClient) {
    // On initial load, check authentication state with authorization server
    // Set up local auth streams if user is already authenticated
    this.localAuthSetup();
    // Handle redirect from Auth0 login
    this.handleAuthCallback();
  }

  // When calling, options can be passed if desired
  // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
  getUser$(options?): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getUser(options))),
      tap(user => this.userProfileSubject$.next(user))
    );
  }

  private localAuthSetup() {
    // This should only be called on app initialization
    // Set up local authentication streams
    const checkAuth$ = this.isAuthenticated$.pipe(
      concatMap((loggedIn: boolean) => {
        if (loggedIn) {
          // If authenticated, get user and set in app
          // NOTE: you could pass options here if needed
          return this.getUser$();
        }
        // If not authenticated, return stream that emits 'false'
        return of(loggedIn);
      })
    );
    checkAuth$.subscribe();
  }

  login(redirectPath: string = '/') {
    // A desired redirect path can be passed to login method
    // (e.g., from a route guard)
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log in
      client.loginWithRedirect({
        redirect_uri: `${window.location.origin}`,
        appState: { target: redirectPath }
      });

    });
  }

  private handleAuthCallback() {
    // Call when app reloads after user logs in with Auth0
    const params = window.location.search;
    if (params.includes('code=') && params.includes('state=')) {
      let targetRoute: string; // Path to redirect to after login processsed
      const authComplete$ = this.handleRedirectCallback$.pipe(
        // Have client, now call method to handle auth callback redirect
        tap(cbRes => {
          // Get and set target redirect route from callback results
          targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
        }),
        concatMap(() => {
          // Redirect callback complete; get user and login status
          return combineLatest([
            this.getUser$(),
            this.isAuthenticated$
          ]);
        })
      );
      // Subscribe to authentication completion observable
      // Response will be an array of user and login status
      authComplete$.subscribe(([user, loggedIn]) => {
        // Redirect to target route after callback processing
        this.router.navigate([targetRoute]);
      });
    }
  }

  logout() {
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log out
      client.logout({
        client_id: env.AUTH0_CLIENT_ID,
        returnTo: `${window.location.origin}`
      });
    });
  }

  //------------  Auth0 API Management Class --------------------- 
  // CRUD for User profiles stored in the Auth0 database. TODO: migrate from client to server
  // getTokenSilently() returns access token 
  // getIdTokenClaims()._raw returns an id token

  getAuthClient() {
    let auth0Client: Auth0Client = null;
    this.auth0Client$.subscribe(authClient => {
      auth0Client = authClient;
    })
    return auth0Client
  }

  getAuth0Identities() {
    this.http.get("http://localhost:8080/server/auth0Identity", {
      headers: {
        'Access_Control_Origin': '*',
        'Content_Type': "application/json"
      },
    }).toPromise().then(
      (idpArray: Array<Object>) => {
        console.log(idpArray)
        idpArray.forEach((individualIDPResponse) => {
          individualIDPResponse = individualIDPResponse['identities'][0]
          sessionStorage.setItem(individualIDPResponse['connection'], individualIDPResponse["access_token"])
        })
      })
  }


}


 
