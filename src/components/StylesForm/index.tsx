import { Form, Input } from 'antd'
import InputColorPicker from 'components/InputColorPicker';
import React from 'react'

interface Props {
  [key: string]: any;
}

const StylesForm = (props: Props) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  return (
    <Form
      {...layout}
      name="stylesForm"
      {...props}
    >
      <Form.Item
        label="字体大小"
        name="fontSize"
      >
        <Input placeholder={"单位rem"} min={1} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="字体粗细"
        name="fontWeight"
      >
        <Input placeholder={"单位rem"} min={1} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="颜色"
        name="color"
      >
        <InputColorPicker />
      </Form.Item>
      {props.children}
    </Form>
  )
}

export default StylesForm
