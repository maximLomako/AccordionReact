import React, {useState} from 'react';
import './App.css';
import {ItemType} from "./Components/Select/Select";
import {Clock} from "./Components/Clock/Clock";


function App() {

    // const [ratingValue, setRatingValue] =
    //   useState<RatingValueType>(3);
    //
    // const [collapsed, setCollapsed] =
    //   useState<boolean>(true);
    // const [on, setOn] = useState(false);

    const [collapsed, setCollapsed] = useState(false);
    const [itemValue, setItemValue] = useState<1 | 2 | 3>(1)
    const items: ItemType[] = [
        {title: 'Vasya', value: 1},
        {title: 'Petya', value: 2},
        {title: 'Kolya', value: 3},
        {title: 'Sveta', value: 4},
        {title: 'Masha', value: 5},
        {title: 'Katya', value: 6}
    ]

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const changeSelectTitleValue = (id: any) => {
        setItemValue(id)
        setCollapsed(!collapsed)
    }

    return (
        <div className="App">
            {/*  <Select items={items}*/}
            {/*          itemValue={itemValue}*/}
            {/*          collapsed={collapsed}*/}
            {/*          changeCollapsed={changeCollapsed}*/}
            {/*          changeSelectTitleValue={changeSelectTitleValue}/>*/}


            {/*<UnControlledAccordion titleValue={"hello"}/>*/}
            {/*<AnalogClock />*/}
            <Clock mode={'digital'}/>
            <Clock mode={'analog'}/>
        </div>

    );
}

// type PageTitlePropsType = {
//   title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//   return (
//     <h1>{props.title}</h1>
//   )
// }


export default App;
