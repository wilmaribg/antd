import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Rate as AntdRate } from 'antd'
import React from 'react'

const RatePreview: React.FC<{
  value?: number
  count?: number
  allowHalf?: boolean
  character?: React.ReactNode
}> = ({ value, count = 5, allowHalf, character }) => {
  return (
    <AntdRate
      disabled
      value={value}
      count={count}
      allowHalf={allowHalf}
      character={character}
    />
  )
}

export const Rate = connect(
  AntdRate,
  mapProps((props) => props),
  mapReadPretty(RatePreview)
)

export default Rate
