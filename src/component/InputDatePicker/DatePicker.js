import React, { useMemo } from 'react'
import { buildWeeks,buildDayNames } from './generator'
import classNames from 'classnames'
import dateFnIsToday from 'date-fns/isToday'
import getDate from 'date-fns/getDate'
import getMonth from 'date-fns/getMonth'
import isSameDay from 'date-fns/isSameDay'
export default function DatePicker(props) {
    const {selectedDate,calendar} = props
    const {year,monthIndex} = calendar
    const weeks = useMemo (()=>buildWeeks(year,monthIndex),[year,monthIndex])
    const dayNames = useMemo (()=>buildDayNames(0),[]);
    
  return (
    <table className='DatePicker-table'>
      <thead><tr className='DatePicker-head'>{dayNames.map((dayName,i)=><th key={i} >{dayName}</th>)}</tr></thead>
        <tbody>
            {weeks.map((week,i)=>(<tr className="DatePicker-tr" key={i}>{
                week.map((day,j)=>{
                  const today = dateFnIsToday(day)
                    
                  //console.log(isSameDay(day,selectedDate));
                  console.log("selectedDate:",selectedDate,"day:",day);
                  const classes = classNames('DatePicker-btn',{
                    'DatePicker-btn-today':today,
                    'DatePicker-btn-noMonth':!(getMonth(day)===monthIndex),
                    'DatePicker-btn-pickDaty':isSameDay(day,selectedDate)
                  })
             
                  return (
                    (<td key={j}>
                      <button className={classes} >{getDate(day)}</button>
                      </td>)
                  )
                })
            }</tr>))}
        </tbody>
    </table>
  )
}
