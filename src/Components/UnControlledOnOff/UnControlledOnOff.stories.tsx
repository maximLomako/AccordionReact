import React, {useState} from 'react';
import {UnControlledOnOff} from "./UnControlledOnOff";
import {OnOff} from "../OnOff/OnOff";
import {action} from "@storybook/addon-actions";



export default {
  title: 'UnControlledOnOff stories',
  component: UnControlledOnOff,
}

const OnOffClicked = action('on off clicked')

export const OnMode = () => <UnControlledOnOff onChange={OnOffClicked} />
export const OffMode = () => <UnControlledOnOff onChange={OnOffClicked} />

export const ModeChange = () => {
  const [value, setValue] = useState(true);
  return <OnOff on={value} onClick={setValue}/>
}




