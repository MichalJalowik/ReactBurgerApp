import React from 'react';
import classes from './BulidControl.css';

const bulidControl = (props) => (

<div className={classes.BulidControl}>
  <div className={classes.Label}>{props.label}</div>
  <button className={classes.Less}>Less</button>
  <button className={classes.More} onClick={props.added} >More</button>
</div>

);

export default bulidControl;