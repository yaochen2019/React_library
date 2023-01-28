import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from './input'




const defaultInput  = ()=>(
    <Input
        style={{width: '300px'}} 
        placeholder="placeholder"
        onChange={action('Change')}
    />
)

const disabledInput = () => (
    <Input
      style={{width: '300px'}}
      disabled
      placeholder="disabled input" 
    />
  )
  
  const iconInput = () => (
    <Input
      style={{width: '300px'}}
      icon="search"
      placeholder="icon"
    />
  )
  
  const sizeInput = () => (
    <React.Fragment>
      <Input
        style={{width: '300px'}}
        defaultValue="large size"
        size="lg"
      />
      <Input
        style={{width: '300px'}}
        placeholder="small size"
        size="sm"
      />
    </React.Fragment>
  )
  
  const pandInput = () => (
    <React.Fragment>
      <Input
        style={{width: '300px'}}
        defaultValue="prepend text"
        prepend="https://"
      />
      <Input
        style={{width: '300px'}}
        append=".com"
        defaultValue="google"
      />
    </React.Fragment>
  )
  
  storiesOf('Input Component', module)
    .add('Input', defaultInput)
    .add('被禁用的 Input', disabledInput)
    .add('带图标的 Input', iconInput)
    .add('大小不同的 Input', sizeInput)
    .add('带前后缀的 Input', pandInput)