import React from "react";
import { useState } from "react";
function Conditionals(){
    const[months,setMonth] = useState();
    const [days, setDays] = useState([]);
    let noOfDays
    const handleChange=(e)=>{
        const selectedMonth = e.target.value;
        setMonth(selectedMonth)
        createCalender(selectedMonth)

    }
   
    const createCalender=(months)=>{
            if(months==="January")
                noOfDays =31;
            else if(months==="Febuary")
                noOfDays =28;
            else if(months==="March")
                noOfDays =31;
            else
                noOfDays = 30;

        }
        let daysarry=[]
        for(let i=1; i<=noOfDays; i++)
        {
            daysarry.push(i)
        }
        setDays(daysarry)

    
    return(
        <div>
            <select label= "Months" value={months} onChange={handleChange}>
                <option value= "January" >January</option>
                <option value="Feburary">Feburary</option>
                <option value="March">March</option>
            </select>
            <ul>
              {days.map(day=><li>{day}</li>)}
            </ul>

 
        </div>
    )

}
export default Conditionals;

