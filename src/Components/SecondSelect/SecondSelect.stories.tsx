import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {ItemType, SecondSelect, SelectPropsType} from './SecondSelect'
import s from "./SecondSelect.module.css";
import {boolean, select, text, withKnobs, object} from '@storybook/addon-knobs'


export default {
  title: 'SecondSelect',
  component: SecondSelect,
}


export const WithValue = () => {
  const [value, setValue] = useState('2')
  return (<>
    <SecondSelect
      onChange={setValue}
      value={value}
      items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'}
      ]}
    />
  </>)
}

export const WithoutValue = () => {
  const [value, setValue] = useState(null)
  return (<>
    <SecondSelect
      onChange={setValue}
      value={value}
      items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'}
      ]}
    />
  </>)
}

