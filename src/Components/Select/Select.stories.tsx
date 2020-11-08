import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {ItemType, Select, SelectPropsType} from './Select'
import s from "./Select.module.css";
import { boolean, select, text, withKnobs, object } from '@storybook/addon-knobs'


// export default {
//   title: 'SecondSelect stories',
//   component: SecondSelect,
// }
//
// const OnOffClicked = action('active window')
// const onClickOnItem = action(`item was clicked `)
//
//
// export const SelectClose = () => {
//   return (
//     <div className={s.select}>
//       <div className={s.title} onClick={OnOffClicked}>{'title'}</div>
//     </div>
//   )
// }
//
//
// export const SelectOpen = () => {
//
//   const [collapsed, setCollapsed] = useState(true);
//   const [itemValue, setItemValue] = useState<1 | 2 | 3>(1)
//
//   const items: ItemType[] = [
//     {title: 'Vasya', value: 1},
//     {title: 'Petya', value: 2},
//     {title: 'Kolya', value: 3},
//     {title: 'Sveta', value: 4},
//     {title: 'Masha', value: 5},
//     {title: 'Katya', value: 6}
//   ]
//
//   return (
//     <div className={s.select}>
//       <div className={s.title} onClick={OnOffClicked}>title</div>
//       {items.map(item =>
//         <div
//           className={`${s.options} ${!collapsed ? '' : s.options__active}`}
//           key={item.value}
//           onClick={onClickOnItem}
//         >{item.title}
//         </div>)}
//     </div>
//   )
// }

// export const ChangeSelectMode = () => <SecondSelect items=
//                                                 {
//                                                   [
//                                                     {title: 'Vasya', value: 1},
//                                                     {title: 'Petya', value: 2},
//                                                     {title: 'Kolya', value: 3},
//                                                     {title: 'Sveta', value: 4},
//                                                     {title: 'Masha', value: 5},
//                                                     {title: 'Katya', value: 6}
//                                                   ]}
//                                               itemValue={}
//                                               changeCollapsed={}
//                                               changeSelectTitleValue={}
//                                               collapsed={}
// />

export default {

  title: 'Select',

  decorators: [withKnobs],

}



export const ChangeSelectMode = () => {

  const items: ItemType[] = [
    {title: 'Vasya', value: 1},
    {title: 'Petya', value: 2},
    {title: 'Kolya', value: 3},
    {title: 'Sveta', value: 4},
    {title: 'Masha', value: 5},
    {title: 'Katya', value: 6}
  ]
  const isCollapsed = boolean('!IsCollapsed', true)
  const selectValue = select('SecondSelect value', [1,2,3,4,5,6], 1)
  const selectValueName = object('SecondSelect Options ', items)





  const OnOffClicked = action('active window')
  const onClickOnItem = action(`item was clicked `)

  return (
    <Select items={selectValueName}
            itemValue={selectValue}
            changeCollapsed={OnOffClicked}
            changeSelectTitleValue={onClickOnItem}
            collapsed={isCollapsed}/>
  )
}


