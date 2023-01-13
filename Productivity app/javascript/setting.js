//////////////////////////////////////////////////////
// display or hide "create session" window start

//function that displays or hides a content start
function display_or_hide( trigerring_element, target_element, display_value){
  trigerring_element.addEventListener("click",
  function(){
  console.log("button clicked");
  target_element.style.display = display_value;
  })
}
//function that displays or hides a content end

//display create session container start
const create_session_button = document.getElementById("create-session-button");
const create_session_container = document.getElementById("create-session-container");
display_or_hide(create_session_button, create_session_container, "block")
//display create session container end

// hide create session container start
const create_session_background = document.getElementById("create-session-background");
display_or_hide(create_session_background, create_session_container, "none");
// hide create session container start

// display or hide "create session" window end
//////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

//disabling all inputs inside existing sessions start
//disable inputs
const inputs_existing_session = document.querySelectorAll(".existing-sessions input");
for (i=0; i< inputs_existing_session.length; i++){
  inputs_existing_session[i].setAttribute("disabled", "");
}
//hide add buttons
const add_buttons = document.querySelectorAll(".existing-sessions .add-button");
for (i=0;i<add_buttons.length;i++){
  add_buttons[i].style.display="none";
}
//hide x-button
const x_buttons = document.querySelectorAll(".existing-sessions .cancel-button");
for (i=0;i<x_buttons.length;i++){
  x_buttons[i].style.display="none";
}
//hide save button
const save_buttons = document.querySelectorAll(".existing-sessions .save-button");
for (i=0;i<save_buttons.length;i++){
  save_buttons[i].style.display="none";
}

//onchange="if(this.value.length<2)this.value='0'+this.value" class="goal-input" type="number" placeholder="00"
const duration_inputs = document.querySelector(".session-optionally-editable .duration input");
for (i=0;i<duration_inputs.length;i++){
  if (duration_inputs[i].value.length < 2){
    duration_inputs[i].value = '0'+ duration_inputs[i].value;
  }
}
// disabling all inputs inside existing sessions end

//enable session editing on click of edit button
function session_editing(id){
  //get edit button
  const edit_button =  document.querySelector("#edit-button-"+id);
  const x_button = document.querySelector(".existing-sessions #cancel-button-"+id);
  const save_button = document.querySelector(".existing-sessions #save-button-"+id);
  const current_add_buttons=document.querySelectorAll("#session-optionally-editable-"+id +" .add-button");
  const current_inputs = document.querySelectorAll("#session-optionally-editable-"+id +" input");

  //make session editable
  edit_button.addEventListener("click", 
    function(){
      console.log("edit-button is being cliiiiicked input");
      //make inputs editable
      for(i=0; i <current_inputs.length; i++){
        console.log("iterating in inputs"+ i);
        current_inputs[i].removeAttribute("disabled");
      }
      //display x button
      x_button.style.display="block";
      //display save button
      save_button.style.display="block"
      //display add buttons
      for(i=0;i<current_add_buttons.length;i++){
        current_add_buttons[i].style.display="block"
      }
      //hide edit button
      edit_button.style.display="none";
    });

    //disable session editing
    x_button.addEventListener("click", 
    function(){
      console.log("cancel-button is being cliiiiicked input");
      //make inputs editable
      for(i=0; i <current_inputs.length; i++){
        console.log("iterating in inputs"+ i);
        current_inputs[i].setAttribute("disabled","");
      }
      //hide x button
      x_button.style.display="none";
      //hide save button
      save_button.style.display="none"
      //hide add buttons
      for(i=0;i<current_add_buttons.length;i++){
        current_add_buttons[i].style.display="none"
      }
      //display edit button
      edit_button.style.display="block";
    });

}
session_editing(1);
session_editing(2);
session_editing(3);
