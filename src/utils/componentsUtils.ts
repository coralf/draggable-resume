import { COMPONENT_TYPE } from "componentRender/config"
import { Component, ComponentProps, TextProps } from "types";
import { genUUID } from "./commUtils";



export function createTextDef({ originX, originY }: Pick<TextProps, 'originX' | 'originY'>): Component {
  const id = genUUID();
  return {
    id,
    type: COMPONENT_TYPE.titleText,
    key: id,
    text: '文本',
    originX,
    originY,
    styles: {
      fontSize: '1rem',
      color: 'rgba(0, 0, 0, 0.85)',
      fontWeight: 'unset',
    }
  };
}