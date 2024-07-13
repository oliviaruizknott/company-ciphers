import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  shapeColors: [0, 0, 0], // circle, quarter, square
  setShapeColors: (colors) => set({ shapeColors: colors }),
});

const useStore = create(devtools(store, "ShapeColorsStore"));

export default useStore;
