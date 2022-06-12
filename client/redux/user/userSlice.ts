import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface UserState {
  name?: string | null;
  lastName?: string | null;
  email: string | null;
  isSignIn: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  email: null,
  name: null,
  lastName: null,
  isSignIn: false,
} as UserState;

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    signIn: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.lastName = action.payload.lastName;
      state.name = action.payload.name;
      state.isSignIn = action.payload.isSignIn;
    },
    logOff: (state) => {
      state.lastName = null;
      (state.email = null), (state.name = null), (state.isSignIn = false);
    },
  },
});

export const { logOff, signIn } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
