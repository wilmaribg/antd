import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Segmented as AntdSegmented } from 'antd'
import type { SegmentedProps as AntdSegmentedProps } from 'antd'
import React from 'react'

const SegmentedPreview: React.FC<{
  value?: string | number
  options?: AntdSegmentedProps['options']
}> = ({ value, options }) => {
  if (value === undefined || value === null) {
    return <span>-</span>
  }

  const option = options?.find((opt) => {
    if (typeof opt === 'object' && opt !== null) {
      return opt.value === value
    }
    return opt === value
  })

  if (typeof option === 'object' && option !== null) {
    return <span>{option.label ?? option.value}</span>
  }

  return <span>{option ?? value}</span>
}

export const Segmented = connect(
  AntdSegmented,
  mapProps({
    dataSource: 'options',
  }),
  mapReadPretty(SegmentedPreview)
)

export default Segmented
