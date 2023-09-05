import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const Home = () => {
    const dispatch = useDispatch();
    const {c}=useSelector(state=>state.khudkaReducer);
    const increment=()=>{
        dispatch(
            {
                type:'incrementKardo',
            }
        )
    };
    const incrementByvalue=()=>{
        dispatch(
            {
                type:'incrementKardoByValue',
                payload:50
            }
        )
    };
    const decrement=()=>{
        dispatch(
            {
                type:'decrementKardo',
            }
        )
    }
    const decrementByvalue=()=>{
        dispatch(
            {
                type:'decrementKardoByValue',
                payload:50
            }
        )
    };
  return (
    <div>
        <h1>Home</h1>
        <h2>{c}</h2>
      <button onClick={()=>{
        increment()
      }}>Increment</button>
      <button 
      onClick={()=>{incrementByvalue()} }>Increment By Value </button>
      <button onClick={()=>{decrement()}}>Decrement</button>
      <button onClick={()=>{decrementByvalue()}}>DecrementByvalue</button>
    </div>
  )
}

export default Home


