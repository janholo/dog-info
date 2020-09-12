import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export enum Severity {
    Information,
    Warning,
    Error
}

export class Toast {
  message: string = "<undefined>";
  severity: Severity = Severity.Information;
  id: number = Math.floor(Math.random() * 100000);
}

interface ToastState {
  toasts: Toast[];
}

const initialState: ToastState = {
  toasts: [],
};

export const toastSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Toast>) => {
        state.toasts.push(action.payload);
    },
    dismissToast: (state, action: PayloadAction<number>) => {
      state.toasts = state.toasts.filter(t => t.id !== action.payload)
    },
  },
});

export const { addToast, dismissToast } = toastSlice.actions;

export const selectToasts = (state: RootState) => state.toast.toasts;

export default toastSlice.reducer;

export const addToastWithDismiss = (msg: string, severity: Severity, delay?: number): AppThunk => async (
  dispatch
) => {

  let t = new Toast();
  t.message = msg;
  t.severity = severity

  dispatch(addToast(t));

  await sleep(delay === undefined ? 5000 : delay );
  
  dispatch(dismissToast(t.id))

}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}