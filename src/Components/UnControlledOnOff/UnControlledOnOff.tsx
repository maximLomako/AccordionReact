import React, {useState} from "react";
import s from "./UnControlledOnOff.module.css"


export type UnControlledOnOffPropsType = {
  onChange: (on: boolean) => void
  defaultOn? : boolean
  defaultOff? : boolean
}

export const UnControlledOnOff = (props: UnControlledOnOffPropsType) => {

  let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);
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

  const onClicked = () => {
    setOn(true)
    props.onChange(true)
  }

  const offClicked = () => {
    setOn(false)
    props.onChange(false)
  }

  return (
    <div className={s.wrapper}>
      <button onClick={onClicked} style={onStyle}>On</button>
      <button onClick={offClicked} style={offStyle}>Off</button>
      <div style={indicatorStyle}></div>
    </div>
  )
}
