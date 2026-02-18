import { connect, mapProps, mapReadPretty } from '@formily/react'
import { ColorPicker as AntdColorPicker } from 'antd'
import type { Color } from 'antd/es/color-picker'
import React from 'react'

const ColorPickerPreview: React.FC<{
  value?: string | Color
}> = ({ value }) => {
  const colorString =
    typeof value === 'string' ? value : value?.toHexString?.() ?? '-'

  if (!value) {
    return <span>-</span>
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div
        style={{
          width: 16,
          height: 16,
          backgroundColor: colorString,
          borderRadius: 2,
          border: '1px solid #d9d9d9',
        }}
      />
      <span>{colorString}</span>
    </div>
  )
}

export const ColorPicker = connect(
  AntdColorPicker,
  mapProps((props, field) => {
    const { onChange, value, ...rest } = props
    return {
      ...rest,
      value,
      onChange: (color: Color, hex: string) => {
        // Formily expects a string value, not a Color object
        // Use the hex string directly
        onChange?.(hex)
      },
    }
  }),
  mapReadPretty(ColorPickerPreview)
)

export default ColorPicker
