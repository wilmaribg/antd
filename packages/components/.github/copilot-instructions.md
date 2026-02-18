# Instrucciones para GitHub Copilot

Este paquete es formily-antd-complete, bindings de Formily para Ant Design v5.

## Contexto

- Framework: Formily (formularios basados en schema JSON)
- UI: Ant Design v5
- Patron: connect() de @formily/react

## Patron de Componente

import { connect, mapProps, mapReadPretty } from "@formily/react"
import { Component as AntdComponent } from "antd"

export const Component = connect(
AntdComponent,
mapProps({ dataSource: "options" }),
mapReadPretty(PreviewComponent)
)

## Schema JSON

const schema = {
type: "object",
properties: {
fieldName: {
type: "string",
"x-decorator": "FormItem",
"x-component": "Input",
"x-component-props": { placeholder: "..." }
}
}
}

## Componentes

Inputs: Input, Password, NumberPicker, AutoComplete, Mentions
Seleccion: Select, Cascader, TreeSelect, Checkbox, Radio, Switch, Segmented
Especiales: Slider, Rate, ColorPicker, DatePicker, TimePicker
Arrays: ArrayTable, ArrayCards, ArrayItems
Layout: FormItem, FormLayout, FormGrid, Space
