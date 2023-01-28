
import chunk from 'lodash/chunk'
import startOfWeek from 'date-fns/startOfWeek'
import { addDays,format,setDay } from 'date-fns';
export function buildWeeks(year,monthIndex){
    const firstDayOfMonth = new Date(year,monthIndex)//算出当前月的一号
    const firstDayOfCalendar = startOfWeek(firstDayOfMonth,{weekStartsOn:0})
    const weeks = new Array(6*7).fill(0).map((_,i)=>addDays(firstDayOfCalendar,i));
    return chunk(weeks,7)
}

export function buildDayNames(weekStartsOn){
    return new Array(7).fill(0).map((_,i)=>(i+weekStartsOn)%7).map(dayOfWeek=>{
        const day = setDay(new Date(0),dayOfWeek)
        return format(day,"EEEEEE")
    })
}