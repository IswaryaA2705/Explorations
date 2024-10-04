import React from "react";
function ArrayManipulation(){
    const arr= [1,2,3,4,5,6,7,9,8]
    console.log(arr.sort());
    console.log(arr.push(1,2))
    console.log(arr.pop())
    console.log(arr.unshift(0))
    console.log(arr.shift())
    console.log(arr.includes(1))
    console.log("Find element 1:", arr.find(element => element === 1));
    console.log(arr.indexOf(2))
    console.log(arr.lastIndexOf(2))
    const maparr = arr.map(arr=>arr-1)
    console.log("maparr",maparr)
    const filterarr = arr.filter(arr=>arr%2===0)
    console.log("filterarr",filterarr)
    console.log("REDUCE",arr.reduce((accumulator,currentValue)=>accumulator+currentValue));
    return(
        <ul>
            {arr.map((arr,index)=>
            <li>{arr}</li>)}
        </ul>
    )
}
export default ArrayManipulation;