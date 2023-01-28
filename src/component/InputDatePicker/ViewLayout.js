import React from 'react'

export default function ViewLayout(props) {
    const {header,bodyElement,footerElement} = props;
    const {leftElement,middleElement,rightElement} = header;
  return (
    <div className="ViewLayout-Container">
        <div className="ViewLayout-Header">
            <div>{leftElement}</div>
            <div>{middleElement}</div>
            <div>{rightElement}</div>
        </div>
        <div className="ViewLayout-Body">
            {bodyElement}
        </div>
        <div className="ViewLayout-Footer">
            {footerElement}
        </div>
    </div>
  )
}
