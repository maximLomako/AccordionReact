import React, {useState} from "react";
import s from "./OnOff.module.css"


type OnOffPropsType = {
  onClick: (on: boolean) => void
  on: boolean
}

const OnOff = (props: OnOffPropsType) => {


  // const on = false;

  const onStyle = {
    border: '1px solid black',
    padding: '10px',
    borderRadius: '50%',
    background: props.on ? 'green' : 'white',
    cursor: 'pointer'
  };

  const offStyle = {
    border: '1px solid black',
    padding: '10px',
    borderRadius: '50%',
    background: props.on ? 'white' : 'red',
    cursor: 'pointer'
  };

  const indicatorStyle = {
    border: '1px solid black',
    padding: '10px',
    borderRadius: '50%',
    marginLeft: '10px',
    background: props.on ? 'green' : 'red'
  };


  return (
    <div className={s.wrapper}>
      <button onClick={() => {props.onClick(true)}} style={onStyle}>On</button>
      <button onClick={() => {props.onClick(false)}} style={offStyle}>Off</button>
      <div style={indicatorStyle}></div>
    </div>
  )
}

export default OnOff;