const inputBox = document.querySelector("#input-box");
const taskBtn = document.querySelector("#task-btn");
const taskContain = document.querySelector("#task-container");




taskBtn.addEventListener("click", () => {

    const div = document.createElement("div")

  const newTaskInput = document.createElement("input");
  newTaskInput.classList.add("new-task-input");
  newTaskInput.value = inputBox.value;
  newTaskInput.readOnly = true;

  const editBtn=document.createElement("button");
  editBtn.innerText="Edit";

  let isEdit=false;

  editBtn.addEventListener("click",()=>{
    if (isEdit === false){
        isEdit=true;
        newTaskInput.readOnly=false;
        newTaskInput.focus();
        editBtn.innerText = "save";
    } else {
        isEdit =false;
        newTaskInput.readOnly= true;
        editBtn.innerText="Edit";
    }
  });

  const deleteBtn=document.createElement("button");
  deleteBtn.innerText="Delete"

  deleteBtn.addEventListener("click",()=>{
    deleteBtn.parentElement.remove();
  });



  div.insertAdjacentElement("afterbegin", deleteBtn);
  div.insertAdjacentElement("afterbegin", editBtn);
  div.insertAdjacentElement("afterbegin", newTaskInput);

  taskContain.insertAdjacentElement("beforeend",div);
   
  
  inputBox.value=""
});
