import {useState,useEffect}from "react";


function useDebounce(value:any,delay:number){
    const [debounceValue,setDebounceValue] = useState(value);
    
    useEffect(() =>{
        const handler = window.setTimeout(()=>{
            setDebounceValue(value)
        },delay)

        return ()=>{
            clearTimeout(handler)
        }
    },[value,delay])

    return debounceValue
}

export default useDebounce;