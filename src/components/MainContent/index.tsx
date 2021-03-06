import { COMPONENT_TYPE } from 'componentRender/config';
import { renderComponents } from 'componentRender/render';
import React, { useCallback, useMemo } from 'react'
import { useDrop } from 'react-dnd'
import { connect, useDispatch } from 'react-redux';
import { addComponent, deleteSelectedComponent } from 'reducers/rootReducer';
import { useAppDispatch, useAppSelector } from 'store';
// import { useAppDispatch } from 'store';
import RootState from 'types';
import { calculateOriginLocation } from 'utils/commUtils';
import './index.css';



interface Props {

}


const MainContent = (props: Props) => {
  const dispatch = useAppDispatch();
  const { components, selectedComponent } = useAppSelector((state: RootState) => state);


  const [, drop] = useDrop({
    accept: [COMPONENT_TYPE.titleText],
    drop(item: any, monitor) {
      const location = monitor.getSourceClientOffset() as { x: number, y: number };
      const position = document.getElementById('mainContent')?.getBoundingClientRect() as { left: number, top: number };
      const { originX, originY } = calculateOriginLocation(location, position);
      dispatch(addComponent({
        ...item,
        originX,
        originY
      }));
    }
  });




  return (
    <div ref={drop} className="mainContent" id="mainContent">
      <div style={{ position: 'relative', height: 'inherit' }}>
        {renderComponents(components)}
      </div>
    </div>
  )
}
export default MainContent;
