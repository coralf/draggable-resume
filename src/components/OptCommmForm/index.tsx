import { Form, Input, InputNumber } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import InputColorPicker from 'components/InputColorPicker';
import React from 'react'

interface Props {
  [key: string]: any;
  initialValues?: any;
}

const OptCommmForm = (props: Props) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  return (
    <Form
      {...layout}
      name="optCommmForm"
      {...props}
    >
      <Form.Item
        label="文本"
        name="text"
      >
        <TextArea placeholder="文本内容" rows={10} />
      </Form.Item>
      {props.children}
    </Form>
  );
}

export default OptCommmForm
