import { COMPONENT_TYPE } from "componentRender/config"
import { BasicInfoProps, TextProps } from "types";
import { genUUID } from "./commUtils";



export function createTextDef({ originX, originY }: Pick<TextProps, 'originX' | 'originY'>): TextProps {
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

export function createBasicInfoDef({ originX, originY }: Pick<BasicInfoProps, 'originX' | 'originY'>): BasicInfoProps {
  const id = genUUID();
  return {
    id,
    type: COMPONENT_TYPE.basicInfo,
    key: id,
    originX,
    originY,
    styles: {
      fontSize: '1rem',
      color: 'rgba(0, 0, 0, 0.85)',
      fontWeight: 'unset',
      width: '100%',
      border: '1px solid #c5c5c5',
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center'
    }
  };
}

export function createComponentByType({ type, ...rest }: Pick<BasicInfoProps, 'type' | 'originX' | 'originY'>) {
  const componentConfig = {
    [COMPONENT_TYPE.basicInfo]: createBasicInfoDef,
    [COMPONENT_TYPE.titleText]: createTextDef
  };
  return componentConfig[type](rest);
}