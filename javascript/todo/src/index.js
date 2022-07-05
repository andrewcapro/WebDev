// import toDo from "./todo";
// import Project from "./project";

// const projectList = document.getElementById("projectlist");

// function addProject() {
//   var inputVal = document.querySelector("#projectname")
//   const newProject = new Project(inputVal);
//   const newList = document.createElement("li");
//   newList.innerHTML = newProject.title;
//   projectList.appendChild(newList);
// }

window.addEventListener('load', () => {
  const form = document.querySelector("#addproject");
  const name = document.querySelector("#projectname");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = name.value;

    if (!task){
      alert("Fill out name");
      return;
    } 
    
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    task_el.appendChild(task_content_el);
    
  })
})

// const addTask = document.querySelector('.addtask');
// addTask.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const data = new toDo(e.target);
// })

// var projectName = document.getElementById('projectname').value;
// document.getElementById("projectsubmit").addEventListener('click', addProject);

