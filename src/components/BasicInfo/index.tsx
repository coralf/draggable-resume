import { Col, Row } from 'antd'
import Wrapper from 'components/Wrapper'
import React, { useEffect, useState } from 'react'
import { BasicInfoProps } from 'types'
// ES6
import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'
import { useAppSelector } from 'store';
interface Props {

}





const BasicInfo = (props: BasicInfoProps) => {
  const mainContentInfo = useAppSelector(state => state.mainContentInfo);
  return (
    <Wrapper {...props}>
      <div
        id='basicInfo'
        style={{
          ...props.styles,
          width: '100%',
          height: '100%'
        }}
      >
        <div style={{ flex: 1 }}>姓名：张三</div>
        <div style={{ flex: 1 }}>年龄：18</div>
        <div style={{ flex: 1 }}>爱好：玩游戏</div>
        <div style={{ flex: 1 }}>性别：男</div>
      </div>
    </Wrapper>
  )
}

export default BasicInfo