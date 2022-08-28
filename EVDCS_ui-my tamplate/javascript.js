function oc_sidebar(){
	if ($i==0) {
		document.getElementById('sidebar').style.display='block';
		$i=1;
	}
	else {
		document.getElementById('sidebar').style.display='none';
		$i=0;
	}

}
function oc_notificationbar(){
	if ($j==0) {
		document.getElementById('notificationbar').style.display='block';
		$j=1;
	}
	else {
		document.getElementById('notificationbar').style.display='none';
		$j=0;
	}
}
function oc_loggedUser(){
    if ($k==0) {
		document.getElementById('logged_user_dropdown').style.display='block';
		$k=1;
	}
	else {
		document.getElementById('logged_user_dropdown').style.display='none';
		$k=0;
	}
}

