import { createSlice } from "@reduxjs/toolkit";
import { COMPONENT_TYPE } from "componentRender/config";
import { stat } from "fs";
import RootState from "types";
import { genUUID } from "utils/commUtils";
import { createTextDef } from "utils/componentsUtils";


const rootSlice = createSlice({
  name: 'root',
  initialState: {
    components: []
  } as RootState,
  reducers: {
    updateDrapType: (state, action) => {

      return state;
    },
    addComponent: (state, { payload }) => {
      state.components.push(createTextDef({
        originX: payload.originX,
        originY: payload.originY
      }));
      return state;
    },
    updateSelectedComponent: (state, { payload }) => {
      state.selectedComponent = payload;
      return state;
    },
    updateSelectedComponentValues: (state, { payload }) => {
      if (state.selectedComponent) {
        const idx = state.components.findIndex(item => item.id === state.selectedComponent?.id);
        const newComponent = { ...state.selectedComponent, ...payload };
        state.components.splice(idx, 1, newComponent);
      }
      return state;
    },
    deleteSelectedComponent: (state) => {
      if (state.selectedComponent) {
        const idx = state.components.findIndex(item => item.id === state.selectedComponent?.id);
        console.log("🚀 ~ file: rootReducer.ts ~ line 41 ~ idx", idx)
        state.components.splice(idx, 1);
      }
      return state;
    }

  }
});
export const { updateDrapType, addComponent, updateSelectedComponent, updateSelectedComponentValues, deleteSelectedComponent } = rootSlice.actions;

export default rootSlice.reducer;