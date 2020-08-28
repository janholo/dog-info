import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface NavbarState {
    isOpen: boolean;
}

const initialState: NavbarState = {
    isOpen: false,
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        toggle: state => {
            state.isOpen = !state.isOpen;
        }
    }
})

export const { toggle } = navbarSlice.actions;

export const selectIsOpen = (state: RootState) => state.navbar.isOpen;

export default navbarSlice.reducer;