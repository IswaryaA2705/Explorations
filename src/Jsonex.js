function Jsonex(){
let student = {
    name: "Emily",
    age: 22,
    subjects: ["Math", "Science"]
};

let studentJSON = JSON.stringify(student);
console.log(studentJSON); 

let studentObj = JSON.parse(studentJSON);
console.log(studentObj.name);
}
export default Jsonex();
