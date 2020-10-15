import React from 'react';
import {UnControlledOnOff} from "./UnControlledOnOff";
import {action} from "@storybook/addon-actions";


export default {
  title: 'UnControlledOnOff stories',
  component: UnControlledOnOff,
}

const OnOffClicked = action('on off clicked')

export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={OnOffClicked}/>
export const OffMode = () => <UnControlledOnOff defaultOff={false} onChange={OnOffClicked}/>
export const BugMode = () => <div>Unsync whem chamge defaultValue when already rendered</div>
export const DefaultInput = () => <input defaultValue={'yo'}/>





