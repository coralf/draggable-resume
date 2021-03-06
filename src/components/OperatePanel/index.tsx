import { Form } from 'antd';
import OptCommmForm from 'components/OptCommmForm'
import Panel from 'components/Panel';
import PanelTitle from 'components/PanelTitle';
import StylesForm from 'components/StylesForm';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { updateSelectedComponent, updateSelectedComponentValues } from 'reducers/rootReducer';
import { useAppDispatch, useAppSelector } from 'store';

interface Props {

}

const OperatePanel = (props: Props) => {
  const { selectedComponent } = useAppSelector(state => state);
  const [stylesForm] = Form.useForm<any>();
  const [commForm] = Form.useForm<any>();

  const dispatch = useAppDispatch();

  const handlePropertiesChange = (values: any) => {
    dispatch(updateSelectedComponentValues(values));
  }

  const handleStylesPropertiesChange = (values: any) => {
    dispatch(updateSelectedComponentValues({ styles: { ...selectedComponent?.styles, ...values } }));
  }

  useEffect(() => {
    stylesForm.resetFields();
    commForm.resetFields();
  }, [selectedComponent])

  if (!selectedComponent) return null;
  return (
    <Panel>
      <PanelTitle>组件配置</PanelTitle>
      <StylesForm
        form={stylesForm}
        onValuesChange={handleStylesPropertiesChange}
        initialValues={selectedComponent.styles}
      ></StylesForm>
      <OptCommmForm
        form={commForm}
        onValuesChange={handlePropertiesChange}
        initialValues={selectedComponent}
      >
      </OptCommmForm>
    </Panel>
  )
}

export default OperatePanel
