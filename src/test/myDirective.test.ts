import { TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MyDirective } from 'src/app/directives/myDirective.directive';

/*  //given
      var expected = new HTMLElement();
      var expectedAttributeName = 'color'
      var expectedAttributeValue = 'red'
      expected.setAttribute(expectedAttributeName, expectedAttributeValue)
      console.log(expected.getAttribute(expectedAttributeName))
  
      //when
      // <p appMyDirective> --  appMyDirective returns header.component.sccs's is-category
      var actual = new HTMLElement();
      // new MyDirective().isCategory
      actual.setAttribute()
  
      //then
      // expect p class to be red; <p>.getCSSClass() -> appMyDirective.__className.color -> 'red'
      // expect(<p>).toBe(red)
      expect(actual).toHaveProperty(expectedAttributeName, expectedAttributeValue);
  
      */


test("myDirective", () => {

   beforeEach(()=>{
    TestBed.resetTestEnvironment();
    // TestBed.initTestEnvironment(BrowserDynamicTestingModule,platformBrowserDynamicTesting())
    TestBed.configureTestingModule({
        declarations: [
            MyDirective,
            HeaderComponent
        ]
    })

    const fixture = TestBed.createComponent(HeaderComponent)
    const el = fixture.debugElement.query(By.directive(MyDirective))
    const directiveInstance = el.injector.get(MyDirective)
    el.query(By.css('appMyDirective'))
    // console.log(el.query(By.directive(MyDirective)).properties)
    expect(directiveInstance.isCategory).toBe(true)
   })

});

    // use createComponent instead of overrideComponent, then,  test all elements of the component
    // TestBed.overrideComponent(HeaderComponent, {
    //     set: {
    //         template: '<p appMyDirective>'
    //     }
    // })

