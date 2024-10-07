import { useState } from "react";
function Form(){
    const [formData,setFormData] = useState({
        name:'',
        gender:''
    })
    const [submittedData, setsubmittedData] = useState();
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value

    })
    }
    const handleSubmit=(e)=>{
          e.preventDefault();
          setsubmittedData(formData)

    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={formData.name} name ="name" onChange={handleChange}></input>
            <select value={formData.gender} name="gender" onChange={handleChange}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="transgender">Transgender</option>
            </select>
            <button type="submit">Submit</button>
            {submittedData && <div>{submittedData.name}
                {submittedData.gender}</div>}
        </form>
    )

}
export default Form;