import { LoadingOutlined } from '@ant-design/icons'
import { connect, mapProps, mapReadPretty } from '@formily/react'
import { AutoComplete as AntdAutoComplete } from 'antd'
import React from 'react'
import { PreviewText } from '../preview-text'

export const AutoComplete = connect(
  AntdAutoComplete,
  mapProps(
    {
      dataSource: 'options',
      loading: true,
    },
    (props, field) => {
      return {
        ...props,
        suffixIcon:
          field?.['loading'] || field?.['validating'] ? (
            <LoadingOutlined />
          ) : (
            props.suffixIcon
          ),
      }
    }
  ),
  mapReadPretty(PreviewText.Input)
)

export default AutoComplete
