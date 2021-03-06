import React from "react";
import { Component, ComponentProps } from "types";
import register from "./register";

export const renderComponents = (components: Component[]) => {
  return components?.map(item => React.createElement(register[item.type], item));
}