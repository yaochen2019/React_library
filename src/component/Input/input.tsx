import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**是否禁用 Input */
  disabled?: boolean,
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize,
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp,
  /**添加前缀 用于配置一些固定组合 */
  prepend?: String | ReactElement,
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * 
 * 
 * 
 * 
 * 
 * 
 */
export const Input: FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props
  console.log(icon);
  
  const classes = classNames('input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-prepend': !!prepend,
    'input-group-append': !!append
  })
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  return (
    <div className={classes} style={style}>
      { prepend && <div className="input-group-prepend-wrapper">{prepend}</div> }
      { icon && <div className="icon-wrapper"><Icon icon={icon} /></div> }
      <input
        className="input-inner"
        disabled={disabled}
        {...restProps} 
      />
      { append && <div className="input-group-append-wrapper">{append}</div> }
    </div>
  )
}

export default Input;