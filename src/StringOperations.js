 function StringOperations(){
    const personA = "Indra";
    const personB = "Asokan";
    console.log("string concat", personA.concat(personB));
    console.log("uppercase",personA.toLowerCase());
    console.log("lowercase",personB.toUpperCase());
    console.log("splice",personA.slice(0,2));
    console.log("replace a with e",personB.replace("a","e"))
    const personC = "aaaruu"
    console.log("replaceall a with n",personC.replaceAll("a","n"));
    console.log("charAt",personC.charAt(0));
    console.log("str[1]",personC[0])
    const quote = "everything is possible";
    console.log("split by ",quote.split(" "))
    const para = `Hi everyone,
     How are you?,${personC}`;
    console.log("para",para)

 }
 export default StringOperations;