import { Col, Row } from 'antd'
import DragPanel from 'components/DragPanel';
import MainContent from 'components/MainContent';
import OperatePanel from 'components/OperatePanel';
import ToolBar from 'components/ToolBar';
import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import './index.css';

interface Props {

}

const MainLayout = (props: Props) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ToolBar></ToolBar>
      <Row className="main-layout">
        <Col span="4">
          <DragPanel></DragPanel>
        </Col>
        <Col span="14">
          <MainContent></MainContent>
        </Col>
        <Col span="6">
          <OperatePanel></OperatePanel>
        </Col>
      </Row>
    </DndProvider>
  )
}

export default MainLayout;
