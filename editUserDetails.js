

  var form=document.getElementById('form');

  var ul=document.getElementById('oi')
  var li=document.getElementById('list')

  //show user details

  document.getElementById('btn1').addEventListener("click",showOutput)
  
  
  function showOutput(data){
  
      let li =document.createElement('li')
      li.id="list"
      let r=li.appendChild(document.createTextNode(data.name+"-"+data.email+"-"+data.pwd+"--"))
       let a=ul.appendChild(li)
       //ul.appendChild(li)
       a.style.textAlign='center'
      a.style.fontSize='50px'
      a.style.fontFamily ='fantasy'
      a.style.color='green'

      let btn=document.createElement('button');
      btn.id='btn4';
      btn.appendChild(document.createTextNode('delete'))
      li.appendChild(btn)
      btn.style.textAlign='center'
      btn.style.fontSize='50px'
      btn.style.fontFamily ='fantasy'
      btn.style.color='red'
      
      let btnE=document.createElement('button');
      btnE.id='btn3';
      btnE.appendChild(document.createTextNode('edit'))
      li.appendChild(btnE)
      btnE.style.textAlign='center'
      btnE.style.fontSize='50px'
      btnE.style.fontFamily ='fantasy'
      btnE.style.color='yellow'

      let b=document.getElementById('btn3').addEventListener("click",editDetails)
    
  
  }
     
  //post details
  
  document.getElementById('btn1').addEventListener("click",networkCall)
  
  function networkCall(){
    
  
    let obj={
       name:document.getElementById('in1').value,
       email:document.getElementById('in2').value,
       pwd:document.getElementById('in3').value
    }
    axios
      .post('https://crudcrud.com/api/5edbd48f3282422aa1c8106961adbc87/Status',obj)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err));
  
  }
 


  // edit details


  function editDetails(){
    let obj={
      name:document.getElementById('in1').value,
      email:document.getElementById('in2').value,
      pwd:document.getElementById('in3').value
   }
    axios
    .put('https://crudcrud.com/api/5edbd48f3282422aa1c8106961adbc87/Status/633c60b706e25f03e8c60dd8',obj)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err));
  }
  

  
  window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/5edbd48f3282422aa1c8106961adbc87/Status')
    .then(response=>{
      for(let i=0; i<response.data.length;i++){
       showOutput(response.data[i])
      }
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
  })
