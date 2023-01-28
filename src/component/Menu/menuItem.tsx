import React,{useContext}from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";


export interface MenuItemProps{
    index?:string;
    disabled?: boolean;
    className?: string;
    children?:React.ReactNode;
    style?:React.CSSProperties;

}
export const MenuItem:React.FC<MenuItemProps> = (props) => {
    const {index,disabled,children,className,style} = props;
    const context = useContext(MenuContext)
    const classes = classNames('menu-item',className,{
        'is-diabled':disabled,
        'is-active':context.index===index
    })
    const handleClick = ()=>{
        if(context.onSelect && !disabled && (typeof index ==='string')){
            context.onSelect(index)
        }
    }
    return (
        <li className={classes} style={style} onClick={handleClick} >
            {children}
        </li>
        )
}


MenuItem.displayName = 'MenuItem'

export default MenuItem;