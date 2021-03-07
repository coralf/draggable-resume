import React from 'react'

interface Props {
  [key: string]: any;
}

const PanelTitle = (props: Props) => {
  return (
    <h4>
      {props.children}
    </h4>
  )
}

export default PanelTitle
