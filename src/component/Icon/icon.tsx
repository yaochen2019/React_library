import React,{FC} from "react";
import classNames from "classnames";
import {FontAwesomeIcon,FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps{
    theme?:ThemeProps;
}
const Icon:FC<IconProps> = (props)=>{
    //icon-primary
    const  {className,theme,...restProps} = props;
    const  classes = classNames('icon',className,{
        [`icon-${theme}`]:theme}) //当theme存在的时候，添加theme类名
    
    return (
        <FontAwesomeIcon className={classes} {...restProps}/>
    )
}


export default Icon;