import React, {useState} from "react";
import s from "./OnOff.module.css"




const OnOff = () => {

  let [on, setOn] = useState(false);
  // const on = false;

  const onStyle = {
    border: '1px solid black',
    padding: '10px',
    borderRadius: '50%',
    background: on ? 'green' : 'white',
    cursor: 'pointer'
  };

  const offStyle = {
    border: '1px solid black',
    padding: '10px',
    borderRadius: '50%',
    background: on ? 'white' : 'red',
    cursor: 'pointer'
  };

  const indicatorStyle = {
    border: '1px solid black',
    padding: '10px',
    borderRadius: '50%',
    marginLeft: '10px',
    background: on ? 'green' : 'red'
  };


  return (
    <div className={s.wrapper}>
      <button onClick={() => {setOn(true)}} style={onStyle}>On</button>
      <button onClick={() => {setOn(false)}} style={offStyle}>Off</button>
      <div style={indicatorStyle}></div>
    </div>
  )
}

export default OnOff;