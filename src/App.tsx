import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {OnOff} from './Components/OnOff/OnOff';
import {UnControlledRating} from "./Components/UnControlledRating/UnControlledRating";
import UnControlledAccordion from "./Components/UnControlledAccordion/UnControlledAccordion";
import {Accordion} from "./Components/Accordion/Accordion";
import UnControlledOnOff from "./Components/UnControlledOnOff/UnControlledOnOff";


function App() {

  const [ratingValue, setRatingValue] =
    useState<RatingValueType>(3);

  const [collapsed, setCollapsed] =
  useState<boolean>(true);

  const [on, setOn] = useState(false);

  return (
    <div className="App">
      controlled
      <OnOff onClick={setOn} on={on}/>
      uncontrolled
      <UnControlledOnOff onChange={setOn}/> {on.toString()}
      {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
      {/*<UnControlledRating />*/}
      <UnControlledAccordion titleValue={'UnControlledAccordion'} />

      <Accordion titleValue={'Controlled'}
                 collapsed={collapsed}
                 onClick={() => {setCollapsed(!collapsed)}}
      />


    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return (
    <h1>{props.title}</h1>
  )
}


export default App;
