import React from 'react'

const Iconcard = (props) => {
  return (
    <div className="main flex flex-col gap-y-1 items-center">
        <div>
            <img className="w-[3rem] " src={props.iconImage} alt={props.altText} />
        </div>
        <div className="iconheading flex flex-col  items-center">
            <h2>{props.iconDetails}</h2>
            <h2>{props.iconMoreDetails}</h2>
        </div>
        
    </div>
  )
}

export default Iconcard