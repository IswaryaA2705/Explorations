import { useContext, useState } from "react";
import BoilingVerdict from "./Child1";
import TemperatureInput from "./Child";
import { UserProvider } from "./useContextex"; 

function Calculator() {
    const [temperature, setTemperature] = useState(''); 
    const user =useContext(UserProvider);
    console.log("user",user)
  
    const handleTemperatureChange = (newTemperature) => {
      setTemperature(newTemperature); 
    };
  
    return (
      <div>
        <TemperatureInput
          temperature={temperature}
          onTemperatureChange={handleTemperatureChange}
        />
        <BoilingVerdict temperature={parseFloat(temperature)} />
      </div>
    );
  }
  
  export default Calculator;