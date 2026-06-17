
function addTask(){
   let input = document.getElementById("taskInput");
   let text = input.value .trim();
   if(text === ""){
      alert("please write a task")
      return;
   }
   let li = document.createElement("li");
   let taskSpan = document.createElement("span");
   taskSpan.textContent = text;

   let doneBtn = document.createElement("button");
   doneBtn.textContent = "Done";
   doneBtn.onclick = function(){
      li.classList.toggle("done");
   };

   let deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Delete";
   deleteBtn.textContent = "Delete";
   deleteBtn.onclick = function(){
      li.remove();
   };
   li.appendChild(taskSpan);
   li.appendChild(doneBtn);
   li.appendChild(deleteBtn);
   document.getElementById("taskList").appendChild(li);
   input.value = "";
}









