import React from 'react'
import { storiesOf } from '@storybook/react'
import InputDatePicker from './InputDatePicker'


const explame  = ()=>(
    <InputDatePicker
    />
)


storiesOf('datePicker Component', module)
.add('datePicker', explame)