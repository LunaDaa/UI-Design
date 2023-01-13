//function that displays or hides a content start
function display_or_hide( trigerring_element, target_element, display_value){
  trigerring_element.addEventListener("click",
  function(){
  console.log("button clicked");
  target_element.style.display = display_value;
  })
}
//function that displays or hides a content end

// display edit goal start
const goal_duration_button = document.getElementById("goal-duration");
const edit_goal = document.getElementById("edit-goal");
display_or_hide(goal_duration_button, edit_goal, "block");
// display edit goal end

// hide edit goal start
const cancel_button = document.getElementById("cancel-button");
display_or_hide(cancel_button, edit_goal, "none");

const edit_goal_background = document.getElementById("edit-goal-background");
display_or_hide(edit_goal_background, edit_goal, "none");
// hide edit goal end
