import {useEffect,useState}from "react";

const useMouseTrack = ()=>{


    const [Position,setPosition] = useState({x:0,y:0})
    useEffect(()=>{
        const updateMouse = (e:MouseEvent)=>{
            setPosition({x:e.clientX,y:e.clientY})

        }
        document.addEventListener('click',updateMouse);
        return ()=>{
            document.removeEventListener('click',updateMouse)
        }
    },[])

    return Position

}

export default useMouseTrack;