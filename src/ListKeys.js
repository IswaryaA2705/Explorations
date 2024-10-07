function ListKeys(){
    const studentDetails = [{id:1,name:"Indra"},{id:2,name:"Christy"}]
    return(
        <ul>
            {studentDetails.map(studentDetail=><li key={studentDetail.id}>{studentDetail.name}</li>)}
        </ul>
    )

}
export default ListKeys