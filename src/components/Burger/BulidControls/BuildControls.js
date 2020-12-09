import React from 'react';
import classes from './BulidControls.css';
import BulidControl from './BulidControl/BulidControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Chease', type: 'cheese' },
  { label: 'Meat', type: 'meat' },

];

const bulidControls = (props) => (

  <div className={classes.BulidControls}>
    <p>Current price: <strong>{props.price.toFixed(2)} </strong> </p>
    {controls.map(ctrl => (
      <BulidControl
        added={() => props.ingAdd(ctrl.type)}
        removed={() => props.ingRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        type={ctrl.label}
        key={ctrl.label}
        label={ctrl.label} />
    ))}
    <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>ORDER NOW</button>


  </div>

);

export default bulidControls;