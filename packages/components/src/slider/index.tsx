import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Slider as AntdSlider } from 'antd'
import React from 'react'

const SliderPreview: React.FC<{
  value?: number | [number, number]
}> = ({ value }) => {
  if (value === undefined || value === null) {
    return <span>-</span>
  }
  if (Array.isArray(value)) {
    return (
      <span>
        {value[0]} - {value[1]}
      </span>
    )
  }
  return <span>{value}</span>
}

export const Slider = connect(
  AntdSlider,
  mapProps((props) => props),
  mapReadPretty(SliderPreview)
)

export default Slider
