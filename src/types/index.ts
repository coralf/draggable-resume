export interface ComponentProps {
  [key: string]: any;
  id: string;
  key: string | number;
  type: string;
  styles: React.CSSProperties
}


export interface TextProps extends ComponentProps {
  originY: string;
  originX: string;
  text: string;
}

export interface LayoutProps extends ComponentProps {
  kkk: string;
}

export interface BasicInfoProps extends ComponentProps {



}

interface MainContentInfo {
  [key: string]: number;
  width: number;
  height: number;
}


export default interface RootState {
  components: ComponentProps[];
  selectedComponent?: ComponentProps;//当前选中的组件
  mainContentInfo?: MainContentInfo
}