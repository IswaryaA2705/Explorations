function Jsonex(){
let student = {
    name: "Emily",
    age: 22,
    subjects: ["Math", "Science"]
};

//convert object to string
let studentJSON = JSON.stringify(student);
console.log(studentJSON); 

// Converting JSON string back to object
let studentObj = JSON.parse(studentJSON);
console.log(studentObj.name);
}
export default Jsonex();
