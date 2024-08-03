

let notes = document.querySelector("#notes")

let tasks =[]

function localTask(){
      let locleSavedTasks = JSON.parse(localStorage.getItem('allTasks'))
        if(loadTask){
             tasks.push(...loadTask)
        }
loadTask()
}


function loadTask(){

localStorage.setItem("allTasks",JSON.stringify(tasks))

       let i =1 
       notes.innerHTML =""

        for(let task of tasks){
            notes.innerHTML +=`<div class="note">
             <div class="left">${i++}</div>
             <div class="right">${task}</div>
             <span><i class="ri-delete-bin-6-line" onclick="deteleTodo('${task}')"></i><i class="ri-pencil-line"></i></span>
        </div>`
        }
}


function deteleTodo(task){
     let index = tasks.indexOf(task)
      if(index>-1){
            tasks.splice(index,1);
            loadTask()
      }
}

let addbtn = document.querySelector("#bnt")

 addbtn.addEventListener("click",()=>{
       let newTask = document.querySelector("#main span input").value
         if(!newTask){
            alert("please enter the some discription...")
         }else{
            tasks.push(newTask)
            loadTask()
         }
  document.querySelector("#main span input").value=""
 
})


