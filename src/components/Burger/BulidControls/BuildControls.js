import React from 'react';
import classes from './BulidControls.css';
import BulidControl from './BulidControl/BulidControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Chease', type: 'chease'},
  {label: 'Meat', type: 'meat'},

];

const bulidControls = (props) => (

<div className={classes.BulidControls}>
  {controls.map(ctrl => (
<BulidControl key={ctrl.label} label={ctrl.label}/>
  ))}
</div>

);

export default bulidControls;