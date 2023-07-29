import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface buildPcState {
  CPU: number;
  Motherboard: number;
  RAM: number;
  PSU: number;
  Storage: number;
  Monitor: number;
  Mouse: number;
  Keyboard: number;
}

const initialState: buildPcState = {
  CPU: 0,
  Motherboard: 0,
  RAM: 0,
  PSU: 0,
  Storage: 0,
  Monitor: 0,
  Mouse: 0,
  Keyboard: 0,
};

export const BuildPc = createSlice({
  name: "buildPc",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Partial<buildPcState>>) => {
      return { ...state, ...action.payload };
    },
    removeAll: (state) => {
      state.CPU = 0;
      state.Motherboard = 0;
      state.RAM = 0;
      state.PSU = 0;
      state.Storage = 0;
      state.Monitor = 0;
      state.Mouse = 0;
      state.Keyboard = 0;
    },
  },
});

export const { add, removeAll } = BuildPc.actions;

export default BuildPc.reducer;
