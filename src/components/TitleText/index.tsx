import Wrapper from 'components/Wrapper'
import React from 'react'
import { ComponentProps, TextProps } from 'types'


const TitleText = (props: TextProps) => {

  return (
    <Wrapper {...props}>
      <div
        style={props.styles}
      >
        {props.text}
      </div>
    </Wrapper>
  )
}

export default TitleText
