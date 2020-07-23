import { createFeatureSelector, createSelector } from "@ngrx/store"
import { GenreState, genreStateFeatureKey, adapter } from "../reducers/genre.reducer"

//slice from store = GenreState
export const selectGenreFeature = createFeatureSelector<GenreState>(genreStateFeatureKey)

//Selector: genres within slice
export const selectGenres = createSelector(selectGenreFeature,
  adapter.getSelectors().selectAll)

  //Selector : errors within slice
export const selectError = createSelector(selectGenreFeature,
  (state: GenreState) => state.error)
