import React from 'react'

interface Props {
  [key: string]: any;
}

const Panel = (props: Props) => {
  return (
    <div style={{ padding: 12 }}>
      {props.children}
    </div>
  )
}

export default Panel
