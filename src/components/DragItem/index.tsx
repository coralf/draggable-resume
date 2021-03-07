import { COMPONENT_TYPE } from 'componentRender/config'
import { EditOutlined } from '@ant-design/icons';
import React from 'react'
import { useDrag } from 'react-dnd'
import './index.css'

interface Props {
  [key: string]: any;
  name: string;
  type: string;
  icon: any;

}

const DragItem = ({ type, name, icon, children }: Props) => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      item: { type },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [],
  )
  return (
    <div className="dragItem">
      <div ref={drag}>
        {/* <img src={icon} alt="" width="25" height="25" /> */}
        {icon}
        <span style={{ padding: '0 12px' }}>{name}</span>
      </div>
    </div>
  )
}

export default DragItem
