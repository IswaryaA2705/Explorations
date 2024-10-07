function TemperatureInput({ temperature, onTemperatureChange }) {
    const handleChange = (e) => {
      onTemperatureChange(e.target.value); // Call the parent's handler
    };
  
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          type="number"
          value={temperature}
          onChange={handleChange}
        />
      </fieldset>
    );
  }
  export default TemperatureInput;