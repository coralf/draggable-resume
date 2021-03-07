import React, { Attributes } from "react";
import { ComponentProps } from "types";
import register from "./register";

export const renderComponents = (components: ComponentProps[]) => {
  return components?.map(item => React.createElement(register[item.type], item as any));
}