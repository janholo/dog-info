import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export class Breed {
  name: string = "<undefined>";
  images: string[] = [];
  subBreeds: { [id: string]: Breed } = {};
  dataLoaded: boolean = false;
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
          dataLoaded: false
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
  let response = await fetch(`https://dog.ceo/api/breeds/list/random/5`);

  let json = await response.json();
  let data: string[] = json.message;

  dispatch(setBreeds(data));

  const { breeds } = getState();

  // Go over all breeds and get images
  for (let breed of Object.values(breeds.breeds)) {
    let imgResponse = await fetch(`https://dog.ceo/api/breed/${breed.name.toLowerCase()}/images`);
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

export const loadAdditionalData = (breed?: string): AppThunk => async (
  dispatch,
  getState
) => {
  if(breed === undefined)
  {
    console.warn("breed undefined");
    return;
  }

  let { breeds } = getState();
  if(breeds.breeds[breed.toLowerCase()].dataLoaded) {
    return;
  }

  let updateSubBreeds = (sb: { [id: string]: Breed }) => {
    let { breeds } = getState();
  
    let oldBreed = breeds.breeds[breed.toLowerCase()];
    if(oldBreed === undefined) {
      console.warn("Somehow this breed is not in the list. abort!")
      return
    }
    let modifiedBreed = {...oldBreed, subBreeds: sb, dataLoaded: true }
    dispatch(updateBreed(modifiedBreed));
  }

  let response = await fetch(`https://dog.ceo/api/breed/${breed.toLowerCase()}/list`);

  let json = await response.json();
  let data: string[] = json.message;

  let subBreeds: { [id: string]: Breed } = {};

  data.forEach(subBreed => {
    let displayBreed = subBreed.charAt(0).toUpperCase() + subBreed.slice(1);
    subBreeds[subBreed.toLowerCase()] = {
      name: displayBreed,
      images: [],
      subBreeds: {},
      dataLoaded: false
    };
  });

  updateSubBreeds(subBreeds);

  // Get all images and update breed again
  subBreeds = {};

  await asyncForEach(data, async (subBreed) => {
    let subResponse = await fetch(
      `https://dog.ceo/api/breed/${breed.toLowerCase()}/${subBreed.toLowerCase()}/images`
    );

    let subJson = await subResponse.json();
    let subData: string[] = subJson.message;
    
    let displayBreed = subBreed.charAt(0).toUpperCase() + subBreed.slice(1);
    subBreeds[subBreed.toLowerCase()] = {
      name: displayBreed,
      images: subData,
      subBreeds: {},
      dataLoaded: false
    };
  });

  updateSubBreeds(subBreeds);
};

export const selectBreeds = (state: RootState) => state.breeds.breeds;

export default breedsSlice.reducer;
