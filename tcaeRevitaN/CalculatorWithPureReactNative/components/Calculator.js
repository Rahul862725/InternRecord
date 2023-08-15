import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Board from './Board'
// import store from '../store.js'
import { useSelector, useDispatch } from 'react-redux'
// import action from '../action/index'
// import - from 'un'
import { setArg,emptyArg,appendArg } from '../reducers/arg'
import { setRes,emptyRes } from '../reducers/result'
import { setOp,emptyOp } from '../reducers/op'
// import { set } from 'immer/dist/internal'

export default function Calculator() {
  const Arg=useSelector(state=>state.arg.arg )
  const Result=useSelector(state=>state.result.result)
  const Op =useSelector(state=>state.op.op )
  console.log(Arg,"Result n ",Result,Op)
  const dispatch=useDispatch()
 

  function evaluate(arg1, arg2, op) {
    let result = 0;
    if (op === '+') return arg1 + arg2
    else if (op === '-') return arg1 - arg2
    else if (op === '*') return arg1 * arg2
    else if (op === '/') return arg1 / arg2
    else if (op === '%') return arg1 % arg2
    return result;

}
function isNumeric(id) {
    if (id[0] === '.') return true;
    // let t= id[0].charCodeAt(0)>=48;
    // console.log(t+ " after compare");
    if (id[0].charCodeAt(0) >= 48 && id[0].charCodeAt(0) < 58) return true;
    return false;
}
function isOperator(id)
{
    if (id === '+'|| id==='-'||id==='/'||id==='*'||id==='%') return true;
    return false;
    
}
 function toNumberString(num) { 
    if (Number.isInteger(num)) { 
      return num + ".0"
    } else {
      return num.toString(); 
    }
  }

  async function onChange(id)
  {
    console.log(id+"value")
    
    
    if (Arg==="Invalid Expression") {
       dispatch(emptyArg())
       dispatch(emptyRes())
       dispatch(emptyOp())
      return;
  }
  else if (id === '=') {
      if (Arg === "") {
        dispatch(setArg("Invalid Expression"))
      }
      if (Op==="") {
          let res = parseFloat(Arg);
          dispatch(setRes(res))
          
      }
      else {
        let rand="abcdef"
        
          let res = parseFloat(Arg);
          res =  evaluate(Result, res, Op)
          let arg =  toNumberString(res)
          // console.log("Evalueated: "+res+"  "+arg)
          dispatch(setArg(arg))
          dispatch(setRes(res))
          dispatch(emptyOp())
       
      }
  }
  else if (id === 'AC') {
    dispatch(emptyArg())
    dispatch(emptyRes())
    dispatch(emptyOp())
  }
  else if (id === '+/-') {
      let arg = "-" + Arg;
      dispatch(setArg(arg))
      
  }
  else if ( isNumeric(id)) {
    console.log("value" ,id)
    dispatch(appendArg(id))
  }
  else if( isOperator(id)){
      if (Op.length >= 1) {
        dispatch(setArg("Invalid Expression"));
          
      }
      // this.state.op=id;
      let res = parseFloat(Arg
        )
        dispatch(emptyArg())
        dispatch(setRes(res))
        dispatch(setOp(id))
  }

  }
  return (
    <ScrollView style={{flex:1}}> 
       <Board value={Arg} onChange={(id)=>onChange(id)}/>
       </ScrollView>
  )
}