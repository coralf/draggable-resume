import { COMPONENT_TYPE } from 'componentRender/config'
import DragItem from 'components/DragItem'
import React from 'react'
import PanelTitle from 'components/PanelTitle';
import Panel from 'components/Panel';
import Export from 'components/Export';
import { EditOutlined, ProfileOutlined } from '@ant-design/icons';

interface Props {

}

const DragPanel = (props: Props) => {
  return (
    <Panel>
      <PanelTitle>组件</PanelTitle>
      <DragItem name="文本" type={COMPONENT_TYPE.titleText} icon={<EditOutlined />}></DragItem>
      <DragItem name="个人信息" type={COMPONENT_TYPE.basicInfo} icon={<ProfileOutlined />}></DragItem>
      {/* <DragItem name="教育经历" type={COMPONENT_TYPE.basicInfo} icon={<ProfileOutlined />}></DragItem>
      <DragItem name="项目经验" type={COMPONENT_TYPE.basicInfo} icon={<ProfileOutlined />}></DragItem>
      <DragItem name="个人评价" type={COMPONENT_TYPE.basicInfo} icon={<ProfileOutlined />}></DragItem>
      <DragItem name="其他" type={COMPONENT_TYPE.basicInfo} icon={<ProfileOutlined />}></DragItem> */}
    </Panel>
  )
}

export default DragPanel
