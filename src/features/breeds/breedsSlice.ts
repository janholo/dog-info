import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export class Breed {
  name: string = "<undefined>";
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
        state.breeds[b.toLowerCase()] = {
          name: displayBreed,
          images: [],
          subBreeds: {},
        };
      });
    },
    updateBreed: (state, action: PayloadAction<Breed>) => {
      state.breeds[action.payload.name.toLowerCase()] = action.payload;
    },
  },
});

export const { setBreeds, updateBreed } = breedsSlice.actions;

export const load = (): AppThunk => async (dispatch, getState) => {
  let response = await fetch(`/api/breeds/list/random/5`);

  let json = await response.json();
  let data: string[] = json.message;

  dispatch(setBreeds(data));

  const { breeds } = getState();

  // Go over all breeds and get images
  for (let breed of Object.values(breeds.breeds)) {
    let imgResponse = await fetch(`/api/breed/${breed.name.toLowerCase()}/images`);
    let imgJson = await imgResponse.json();
    let images: string[] = imgJson.message;
    let updatedBreed = { ...breed, images: images };
    dispatch(updateBreed(updatedBreed));
  }
};

const asyncForEach = async (
  array: string[],
  callback: (value: string, index: number, array: string[]) => Promise<void>
) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

export const loadAdditionalData = (breed: string): AppThunk => async (
  dispatch,
  getState
) => {
  let response = await fetch(`/api/breed/${breed.toLowerCase()}/list`);

  let json = await response.json();
  let data: string[] = json.message;

  let subBreeds: { [id: string]: Breed } = {};

  await asyncForEach(data, async (subBreed) => {
    let displayBreed = subBreed.charAt(0).toUpperCase() + subBreed.slice(1);
    let subResponse = await fetch(
      `/api/breed/${breed.toLowerCase()}/${subBreed.toLowerCase()}/images`
    );

    let subJson = await subResponse.json();
    let subData: string[] = subJson.message;

    subBreeds[subBreed.toLowerCase()] = {
      name: displayBreed,
      images: subData,
      subBreeds: {},
    };
  });

  let { breeds } = getState();

  let oldBreed = breeds.breeds[breed.toLowerCase()];
  if(oldBreed === undefined) {
    console.warn("Somehow this breed is not in the list. abort!")
    return
  }
  let modifiedBreed = {...oldBreed, subBreeds }
  

  dispatch(updateBreed(modifiedBreed));
};

export const selectBreeds = (state: RootState) => state.breeds.breeds;

export default breedsSlice.reducer;
