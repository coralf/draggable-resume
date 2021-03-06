import { Button } from 'antd'
import React from 'react'

interface Props {

}

const Export = (props: Props) => {
  return (
    <div style={{ alignSelf: 'flex-end' }}>
      <Button type="primary">导出为PDF</Button>
    </div>
  )
}

export default Export
