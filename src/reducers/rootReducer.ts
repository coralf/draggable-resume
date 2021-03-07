import { createSlice } from "@reduxjs/toolkit";
import { COMPONENT_TYPE } from "componentRender/config";
import { stat } from "fs";
import RootState from "types";
import { genUUID } from "utils/commUtils";
import { createComponentByType, createTextDef } from "utils/componentsUtils";


const rootSlice = createSlice({
  name: 'root',
  initialState: {
    components: [],
  } as RootState,
  reducers: {
    addComponent: (state, { payload }) => {
      state.components.push(createComponentByType(payload));
    },
    updateSelectedComponent: (state, { payload }) => {
      state.selectedComponent = payload;
    },
    updateSelectedComponentValues: (state, { payload, ...rest }) => {
      if (state.selectedComponent) {
        const idx = state.components.findIndex(item => item.id === state.selectedComponent?.id);
        const newComponent = { ...state.selectedComponent, ...payload };
        state.components.splice(idx, 1, newComponent);
        state.selectedComponent = newComponent;//更新选中的组件
      }
    },
    deleteSelectedComponent: (state) => {
      if (state.selectedComponent) {
        const idx = state.components.findIndex(item => item.id === state.selectedComponent?.id);
        state.components.splice(idx, 1);
      }
    },
    updateMainContentInfo: (state, { payload }) => {
      state.mainContentInfo = {
        bottom: payload.bottom,
        height: payload.height,
        left: payload.left,
        right: payload.right,
        top: payload.top,
        width: payload.width,
        x: payload.x,
        y: payload.y
      };
    }
  }
});
export const { updateMainContentInfo, addComponent, updateSelectedComponent, updateSelectedComponentValues, deleteSelectedComponent } = rootSlice.actions;

export default rootSlice.reducer;