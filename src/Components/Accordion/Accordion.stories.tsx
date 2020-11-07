import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
  title: 'Accordion stories',
  component: Accordion,
}

const OnOffClicked = action('on off clicked')
const onClickOnItem = action(`some item was clcicked`)

export const CollapsedMode = () => <Accordion titleValue={'New Accordion'}
                                              collapsed={true}
                                              onChange={OnOffClicked}
                                              items={[]}
                                              onClick={OnOffClicked}
/>
export const UnCollapsedMode = () => <Accordion titleValue={'New Accordion'}
                                                collapsed={false}
                                                onChange={OnOffClicked}
                                                onClick={onClickOnItem}
                                                items={[
                                                  {title: 'Vasya', value: 1},
                                                  {title: 'Petya', value: 2},
                                                  {title: 'Kolya', value: 3}
                                                ]}
/>

export const ModeChange = () => {
  const [collapsed, setCollapsed] = useState(true);
  return <Accordion titleValue={'ChangeAccordion'} collapsed={collapsed}
                    onChange={() => setCollapsed(!collapsed)}
                    onClick={(value) => {alert(`user with id ${value} should be happy!`)}}
                    items={[
                      {title: 'Vasya', value: 1},
                      {title: 'Petya', value: 2},
                      {title: 'Kolya', value: 3}
                    ]}/>
}



