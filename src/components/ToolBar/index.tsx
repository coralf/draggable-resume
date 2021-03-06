import DeleteComponent from 'components/DeleteComponent'
import Export from 'components/Export'
import React from 'react'

interface Props {

}

const ToolBar = (props: Props) => {
  return (
    <div className="toolBar">
      <div className="toolBarLayout">
        <div style={{ flex: '1 1 auto' }}>
        </div>
        <DeleteComponent></DeleteComponent>
        <Export></Export>
      </div>
    </div>
  )
}

export default ToolBar
