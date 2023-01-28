import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName = 'zoom-in-top' | 'zomm-in-bottom' | 'zoom-in-left' | 'zoom-in-right';

interface TransitionProps {
    animation?:AnimationName,
    wrapper?:boolean,
    children?:React.ReactNode//最好手动的显示声明children
}
const Transition:React.FC<TransitionProps & CSSTransitionProps > = (props)=>{
    const {children,wrapper,classNames,animation,...restProps} = props;
    return (
        <CSSTransition classNames={classNames?classNames:animation} {...restProps}>
            {wrapper ? <div>{children}</div>:children }
        </CSSTransition>  
    )
}

Transition.defaultProps = {
    unmountOnExit: true,
    appear:true
}

export default Transition;