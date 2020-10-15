import React from 'react';
import {UnControlledRating} from "./UnControlledRating";
import {action} from "@storybook/addon-actions";


export default {
  title: 'Uncontrolledrating stories',
  component: UnControlledRating,
}

const callback = action('Rating changed inside component')

export const Rating0 = () => <UnControlledRating defaultValue={0}
                                                 onChange={callback}
/>
export const Rating1 = () => <UnControlledRating defaultValue={1}
                                                 onChange={callback}
/>
export const Rating2 = () => <UnControlledRating defaultValue={2}
                                                 onChange={callback}
/>
export const Rating3 = () => <UnControlledRating defaultValue={3}
                                                 onChange={callback}
/>
export const Rating4 = () => <UnControlledRating defaultValue={4}
                                                 onChange={callback}
/>
export const Rating5 = () => <UnControlledRating defaultValue={5}
                                                 onChange={callback}
/>

