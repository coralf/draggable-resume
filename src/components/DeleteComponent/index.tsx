import { Button } from 'antd'
import React from 'react'
import { deleteSelectedComponent } from 'reducers/rootReducer';
import { useAppDispatch } from 'store';

interface Props {

}

const DeleteComponent = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleDeleteComponent = () => {
    dispatch(deleteSelectedComponent())
  }

  return (
    <div
      style={{ margin: '0 5px' }}
    >
      <Button type="primary" onClick={handleDeleteComponent}>删除节点</Button>
    </div>
  )
}

export default DeleteComponent
