import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

class Units {
    name?: string;
    description?: string;
}

interface UnitsState {
    units: Units[];
}

const initialState: UnitsState = {
    units: [],
}

export const unitsSlice = createSlice({
    name: 'units',
    initialState,
    reducers: {
        setUnits: (state, action: PayloadAction<Units[]>) => {
            state.units = action.payload;
        }
    }
})

export const { setUnits } = unitsSlice.actions;

export const load = (): AppThunk => dispatch => {
    fetch(`/api/v1/units`)
      .then(res => res.json())
      .then(json => {
          console.log(json);
          dispatch(setUnits(json.units))
      });
  };

export const selectUnits = (state: RootState) => state.units.units;

export default unitsSlice.reducer;