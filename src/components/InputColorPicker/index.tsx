
import { Input } from 'antd';
import { CompactPicker } from 'react-color';
const InputColorPicker = (props: { onChange?: any; value?: any; }) => {
  const { onChange, value } = props;

  const handelColorPick = ({ hex }: any) => {
    pickColor(hex);
  }

  const pickColor = (color: any) => {
    if (onChange) {
      onChange(color);
    }
  }

  const onChangeColorInput = (e: { target: { value: any; }; }) => {
    const lColor = e.target.value;
    pickColor(lColor);
  }

  return (
    <>
      <Input type='text' value={value} onChange={onChangeColorInput} style={{ backgroundColor: value }} />
      <CompactPicker color={value} onChangeComplete={handelColorPick} />
    </>
  );

}
export default InputColorPicker;