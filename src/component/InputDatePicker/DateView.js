import React from 'react'
import ViewLayout from './ViewLayout'
import DatePicker from'./DatePicker'
import Icon from '../Icon/icon'

export default function DateView() {
  return (
    <ViewLayout
    header={{
        leftElement:<Icon fontSize="20px" icon="arrow-left" />,
        middleElement:<p> month year</p>,
        rightElement:<Icon fontSize="20px" icon="arrow-right" />
    }}
    bodyElement={<DatePicker selectedDate={new Date(2022,9,14)} calendar={{year:2022,monthIndex:9}} />}
    footerElement={<button className="DateView-footer">Today</button>}
    >

    </ViewLayout>
  )
}
