import { connect, mapProps, mapReadPretty } from '@formily/react'
import { Mentions as AntdMentions } from 'antd'
import { PreviewText } from '../preview-text'

export const Mentions = connect(
  AntdMentions,
  mapProps(
    {
      dataSource: 'options',
      loading: true,
    },
    (props, field) => {
      return {
        ...props,
        loading: field?.['loading'] || field?.['validating'] || props.loading,
      }
    }
  ),
  mapReadPretty(PreviewText.Input)
)

export default Mentions
