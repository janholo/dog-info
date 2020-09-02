import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export class Breed {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  images: string[] = [];
  subBreeds: { [id: string]: Breed } = {};
}

interface BreedsState {
  breeds: { [id: string]: Breed };
}

const initialState: BreedsState = {
  breeds: {},
};

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    setBreeds: (state, action: PayloadAction<string[]>) => {
      state.breeds = {};

      action.payload.forEach((b) => {
        let displayBreed = b.charAt(0).toUpperCase() + b.slice(1);
        state.breeds[b.toLowerCase()] = new Breed(displayBreed);
      });
    },
    setImages: (
      state,
      action: PayloadAction<{ breed: string; images: string[] }>
    ) => {
        let displayBreed = action.payload.breed.charAt(0).toUpperCase() + action.payload.breed.slice(1);
        let b = new Breed(displayBreed);
        b.images = action.payload.images;
      state.breeds[b.name.toLowerCase()] = b;
    },
  },
});

export const { setBreeds, setImages } = breedsSlice.actions;

export const load = (): AppThunk => async (dispatch) => {
  let response = await fetch(`/api/breeds/list/random/5`);

  let json = await response.json();
  let data: string[] = json.message;

  dispatch(setBreeds(data));

  for (let breed of data) {
    let imgResponse = await fetch(`/api/breed/${breed}/images`);
    let imgJson = await imgResponse.json();
    let images: string[] = imgJson.message;
    dispatch(setImages({breed, images}));
  }
};

export const selectBreeds = (state: RootState) => state.breeds.breeds;

export default breedsSlice.reducer;
