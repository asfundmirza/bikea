import React from "react";

const Iconcard = (props) => {
  return (
    <div className="main flex flex-col  items-center">
      <div>
        <img src={props.iconImage} alt={props.altText} width={40} height={40} />
      </div>
      <div className="iconheading flex flex-col  items-center">
        <h2>{props.iconDetails}</h2>
        <h2>{props.iconMoreDetails}</h2>
      </div>
    </div>
  );
};

export default Iconcard;
