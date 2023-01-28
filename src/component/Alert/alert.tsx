import React,{useState} from "react";
import classNames from 'classnames'

export enum AlertType{
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning'
}
interface BaseAlert{
    className?:string,
    title?:string,
    description?: string,
    alertType?:AlertType,
    onClose?:()=>void,
    closeable?:boolean,
}


