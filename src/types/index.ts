export interface ComponentProps {
  [key: string]: any;
  id: string;
  key: string | number;
  type: string;
}


export interface TextProps extends ComponentProps {
  originY: string;
  originX: string;
  text: string;
  styles: React.CSSProperties
}

export interface LayoutProps extends ComponentProps {

}

export type Component = LayoutProps & TextProps;

export default interface RootState {
  components: Component[];
  selectedComponent?: ComponentProps;//当前选中的组件
}

