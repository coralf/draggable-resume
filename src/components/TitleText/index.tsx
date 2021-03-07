import Wrapper from 'components/Wrapper'
import React from 'react'
import { ComponentProps, TextProps } from 'types'


const TitleText = (props: TextProps) => {

  return (
    <Wrapper {...props}>
      <div
        style={{
          // position: 'absolute',
          // left: props.originX,
          // top: props.originY,
          cursor: 'grab',
          ...props.styles
        }}
      >
        {props.text}
      </div>
    </Wrapper>
  )
}

export default TitleText
