# formily-antd-complete

Formily bindings para TODOS los componentes de Ant Design v5.

## Instalacion

```bash
npm install formily-antd-complete antd @formily/core @formily/react
```

## Uso Basico

```tsx
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'
import {
  Form,
  FormItem,
  Input,
  Select,
  Slider,
  Rate,
} from 'formily-antd-complete'

const SchemaField = createSchemaField({
  components: { FormItem, Input, Select, Slider, Rate },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: 'Usuario',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    rating: {
      type: 'number',
      title: 'Calificacion',
      'x-decorator': 'FormItem',
      'x-component': 'Rate',
    },
  },
}

export default () => (
  <FormProvider form={form}>
    <SchemaField schema={schema} />
  </FormProvider>
)
```

## Componentes Disponibles

### Inputs

Input, Input.TextArea, Password, NumberPicker, AutoComplete, Mentions

### Seleccion

Select, Cascader, TreeSelect, Checkbox, Radio, Switch, Transfer, Segmented

### Especiales

Slider, Rate, ColorPicker, DatePicker, TimePicker, Upload

### Arrays

ArrayTable, ArrayCards, ArrayItems, ArrayTabs, ArrayCollapse

### Layout

Form, FormItem, FormLayout, FormGrid, Space, FormStep, FormTab, FormCollapse

## Componentes Nuevos (vs @formily/antd-v5)

- Slider - Control deslizante
- ColorPicker - Selector de color
- Rate - Calificacion con estrellas
- AutoComplete - Autocompletado
- Mentions - Menciones (@usuario)
- Segmented - Control segmentado

## Licencia

MIT
