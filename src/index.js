const form=document.querySelector("#createTaskForm");

form.addEventListener("submit",(event) =>{
  event.preventDefault();
  // console.log("submit working");
  // console.log(event.target);
  let text=document.querySelector("input").value;
  // console.log(text)
  let header=document.createElement("li");
  header.className="todos"
  header.textContent=text;
  document.querySelector("ol").appendChild(header);

  let del = document.createElement("button");
  del.textContent="X"
  let arrayContent= document.querySelector("ol").lastElementChild;
  // console.log(arrayContent);
  arrayContent.appendChild(del);

  del.addEventListener("click",() => {
    arrayContent.remove();
  })

  const prio= form.priority;
  // console.log(prio)

  if(prio.value==="high"){
    header.style.color="red";
  }
  else if(prio.value==="medium"){
    header.style.color="blue";
  }
  else if(prio.value==="low"){
    header.style.color="green";
  }
  else if(prio.value==="very low"){
    header.style.color="light green";
  }
  

});



