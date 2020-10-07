import React, {useState} from "react";

type UnControlledAccordionPropsType = {
  titleValue: string
}


function UnControlledAccordion(props: UnControlledAccordionPropsType) {

  let [collapsed, setCollapsed] = useState(false)

  return (
    <div>
      <UnControlledAccordionTitle title={props.titleValue}/>
      <button onClick={() => {setCollapsed(!collapsed)}}>toggle</button>
      {!collapsed && <UnControlledAccordionBody/>}
    </div>
  )
}

type UnControlledAccordionTitlePropsType = {
  title: string
}

function UnControlledAccordionTitle(props: UnControlledAccordionTitlePropsType) {
  return (
    <h3>{props.title}</h3>
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