import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";


function App() {
  return (
    <div>
      {/*<PageTitle title="This is APP component"/>*/}
      <PageTitle title="Hello Dear friends"/>
      {/*Article 1*/}
      {/*<Rating value={3}/>*/}
      <Accordion titleValue='Menu' collapsed={false}/>
      <Accordion titleValue='Something else' collapsed={false}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
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
