// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { legacy_createStore } from 'redux';
import reducer from './Reducer';
import { decrementLike,incrementLike } from './Action';

const store =legacy_createStore(reducer);

export default function LikeCounter() {
    const [count,setCount]=useState(store.getState().count)
    
    store.subscribe(()=>{
        setCount(store.getState().count)
    })

    const hadleUnlike=()=>{
        store.dispatch(decrementLike())
    };
    const hadlelike=()=>{
        store.dispatch(incrementLike())
    };
  return (
    <div>
     <h1>{count}</h1>
     <button onClick={hadlelike}>Like</button>
     <button onClick={hadleUnlike}>UnLike</button>
    </div>
  )
}