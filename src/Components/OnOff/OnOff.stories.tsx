import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {Rating, RatingValueType} from "../Rating/Rating";
import {action} from "@storybook/addon-actions";


export default {
  title: 'OnOff stories',
  component: OnOff,
}

const OnOffClicked = action('on off clicked')

export const OnMode = () => <OnOff onClick={OnOffClicked} on={true} />
export const OffMode = () => <OnOff onClick={OnOffClicked} on={false} />

export const ModeChange = () => {
  const [value, setValue] = useState(true);
  return <OnOff on={value} onClick={setValue}/>
}



