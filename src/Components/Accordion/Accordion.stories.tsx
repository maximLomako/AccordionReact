import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
  title: 'Accordion stories',
  component: Accordion,
}

const OnOffClicked = action('on off clicked')

export const CollapsedMode = () => <Accordion titleValue={'New Accordion'}
                                          collapsed={true}
                                          onClick={OnOffClicked}/>
export const UnCollapsedMode = () => <Accordion titleValue={'New Accordion'}
                                            collapsed={false}
                                            onClick={OnOffClicked}/>

export const ModeChange = () => {
  const [collapsed, setCollapsed] = useState(true);
  return <Accordion titleValue={'ChangeAccordion'} collapsed={collapsed}
                    onClick={()=>setCollapsed(!collapsed)}/>
}



