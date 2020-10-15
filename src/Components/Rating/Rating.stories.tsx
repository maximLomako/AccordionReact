import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";


export default {
  title: 'Rating stories',
  component: Rating,
}

export const EmptyStar = () => <Rating value={0} onClick={a => a}/>
export const Rating1 = () => <Rating value={1} onClick={a => a}/>
export const Rating2 = () => <Rating value={2} onClick={a => a}/>
export const Rating3 = () => <Rating value={3} onClick={a => a}/>
export const Rating4 = () => <Rating value={4} onClick={a => a}/>
export const Rating5 = () => <Rating value={5} onClick={a => a}/>
export const RatingChanging = () => {
  const [rating, setRating] = useState<RatingValueType>(0);
  return <Rating value={rating} onClick={setRating}/>
}
