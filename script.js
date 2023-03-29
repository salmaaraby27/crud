var fullName = document.getElementById ('fullName')
var number   = document.getElementById ('number')
var salary   = document.getElementById ('salary')
var city     = document.getElementById ('city')
var submit   = document.getElementById('submit')

console.log(fullName ,number, salary , city )
//create
 var newData =[] 
 if (localStorage.info != null) {
  newData = JSON.parse(localStorage.info)
}else{
  newData=[];
}
 submit.onclick= function (){
     var createData={
      fullName:fullName.value,
      number:number.value,
      salary:salary.value,
      city:city.value
     }
     console.log(createData)
     newData.push(createData)
     localStorage.setItem('info', JSON.stringify(newData))
     showData()
     clear()
     
     
}
//clear
function clear(){
  fullName.value=''
  number.value=''
  salary.value=''
  city.value=''
   showData()

}
// read
function showData(){
    var table=''
    for(var i=0 ; i < newData.length ; i++){
     
      table += `
      <tr>
       <td>${i}</td>
       <td>${newData[i].fullName}</td>
       <td>${newData[i].number}</td>
       <td>${newData[i].salary}</td>
       <td>${newData[i].city}</td>
       <td><button onclick='deleteData(${i})' id="deleteBtn">Delete</button></td>
          <td><button onclick='update(${i})' id="editBtn">Edit</button></td>
     </tr>
      ` 
    } 
    document.getElementById('tbody').innerHTML= table
    var btndelete= getElementById('deleteAll')
     if(newData.length>0){
      btndelete=innerHTML `
      <button >Delete All</button>
      `

     }

}
// Delete  
function deleteData(i){
  newData.splice(i,1)
  localStorage.info= JSON.stringify(newData)
  showData()
}


// update 
function update (i){
  fullname.value=newData[i].fullName
number.value=newData[i].number
salary.value=newData[i].salary
city.value=newData[i].city
submit.innerHTML='update'
}



