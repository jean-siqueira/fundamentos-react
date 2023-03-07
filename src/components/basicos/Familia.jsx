import React, { cloneElement } from "react";

export default (props) => {

  return (
    <div>
      {/* ...props  é um spred */}
      {React.Children.map(props.children, (child, i) => {
        return cloneElement(child,  {...props, key: i});
      })}
        <div>Outra alternativa</div>
       {/* outra alternativa pois props.children já é um array */}
       {props.children.map((child, i) => {
        return cloneElement(child, {...props, key: i});
      })}
    </div>
  );
};
