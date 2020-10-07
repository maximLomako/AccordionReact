import React, {useState} from "react";


export function UnControlledRating() {

  let [value, setValue] = useState(0);

  return (
    <div>
      <Star selected={value > 0}/> <button onClick={() =>
    {setValue(1)}}>push</button>
      <Star selected={value > 1}/> <button onClick={() =>
    {setValue(2)}}>push</button>
      <Star selected={value > 2}/> <button onClick={() =>
    {setValue(3)}}>push</button>
      <Star selected={value > 3}/> <button onClick={() =>
    {setValue(4)}}>push</button>
      <Star selected={value > 4}/> <button onClick={() =>
    {setValue(5)}}>push</button>
    </div>
  )


}

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  if (props.selected === true) {
    return <span><b>star </b></span>
  } else {
    return <span>star </span>
  }
}