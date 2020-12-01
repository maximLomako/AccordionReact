import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type UnControlledAccordionPropsType = {
  titleValue: string
}


export function UnControlledAccordion(props: UnControlledAccordionPropsType) {

  // let [collapsed, setCollapsed] = useState(false);
  let [state, dispatch] = useReducer(reducer
    , {collapsed: false});

  return (
    <div>
      {/*<UnControlledAccordionTitle title={props.titleValue} onClick={ () => {setCollapsed(!collapsed)}}/>*/}
      <UnControlledAccordionTitle title={props.titleValue} onClick={() => {

        dispatch({type: TOGGLE_CONSTANT})
      }}/>
      {!state.collapsed && <UnControlledAccordionBody/>}
    </div>
  )
}

type UnControlledAccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function UnControlledAccordionTitle(props: UnControlledAccordionTitlePropsType) {
  return (
    <h3 onClick={() => {
      props.onClick()
    }}>{props.title}</h3>
  )
}

function UnControlledAccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

