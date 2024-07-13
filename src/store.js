import { create } from "zustand";
import { BLACK } from "./colors";

const useStore = create((set) => ({
  shapeColors: [BLACK, BLACK, BLACK],
  setShapeColors: (colors) => set({ shapeColors: colors }),
}));

export default useStore;
