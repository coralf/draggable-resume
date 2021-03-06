import { COMPONENT_TYPE } from 'componentRender/config'
import DragItem from 'components/DragItem'
import React from 'react'
import sLineText from 'assets/s_line_text.svg';
import PanelTitle from 'components/PanelTitle';
import Panel from 'components/Panel';
import Export from 'components/Export';

interface Props {

}

const DragPanel = (props: Props) => {
  return (
    <Panel>
      <PanelTitle>组件</PanelTitle>
      <DragItem name="文本" type={COMPONENT_TYPE.titleText} icon={sLineText}></DragItem>
    </Panel>
  )
}

export default DragPanel
