import { Store } from "@/types/store";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { createUserSlice } from "./user-slice";
import { devtools } from "zustand/middleware";
import { subscribeWithSelector } from "zustand/middleware";

export const useStore = create<Store>()(
  devtools(
    subscribeWithSelector(
      immer((...a) => ({
        ...createUserSlice(...a),
      }))
    )
  )
);
