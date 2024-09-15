import { StateCreator } from "zustand";

type UserState = {
  name: string;
  email: string;
  id: string;
};

type UserActions = {
  setEmail: (email: string) => void;
  setId: () => void;
};

export type UserSlice = UserState & UserActions;

const initialState: UserState = {
  name: "John Doe",
  email: "",
  id: "",
};

export const createUserSlice: StateCreator<UserSlice, [["zustand/immer", never]], [], UserSlice> = (set, get) => ({
  ...initialState,
  setEmail: (email: string) => {
    set((state) => {
      state.email = email;
    });
  },
  setId() {
    set((state) => {
      state.id = get().name + get().email;
    });
  },
});
