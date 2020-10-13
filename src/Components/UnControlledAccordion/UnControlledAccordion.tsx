import React, {useState} from "react";

type UnControlledAccordionPropsType = {
  titleValue: string
}


function UnControlledAccordion(props: UnControlledAccordionPropsType) {

  let [collapsed, setCollapsed] = useState(false)

  return (
    <div>
      <UnControlledAccordionTitle title={props.titleValue} onClick={ () => {setCollapsed(!collapsed)}}/>
      {!collapsed && <UnControlledAccordionBody/>}
    </div>
  )
}

type UnControlledAccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function UnControlledAccordionTitle(props: UnControlledAccordionTitlePropsType) {
  return (
    <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
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

export default UnControlledAccordion;