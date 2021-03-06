import { stat } from 'fs'
import React, { useState } from 'react'
import Draggable from 'react-draggable'
import { updateSelectedComponent } from 'reducers/rootReducer'
import { useAppDispatch, useAppSelector } from 'store'
import RootState, { ComponentProps } from 'types'



const Wrapper = (props: ComponentProps) => {
  const rootState = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const selectedStyle = {
    outline: '1px solid #40a9ff',
  };

  const handleStart = () => {
    if (rootState.selectedComponent && !isDragging && rootState.selectedComponent?.id !== props.id) {
      dispatch(updateSelectedComponent(null));
      setIsDragging(false);
    }
    const item = rootState.components.find(item => item.id === props.id);
    dispatch(updateSelectedComponent(item));
  }

  const handleDrag = () => {
    setIsDragging(true);
  }
  const handleStop = () => {
    setIsDragging(false);
  }

  return (
    <Draggable
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div style={{
        position: 'absolute',
        left: props.originX,
        top: props.originY,
        cursor: 'grab',
        ...((rootState.selectedComponent?.id === props.id) && selectedStyle)
      }}
      >
        {props.children}
      </div>
    </Draggable>
  )
}

export default Wrapper
