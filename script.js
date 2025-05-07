function filterBy(c){
	// hide all projects
	var allProj = document.querySelectorAll('figure');
	for(i = 0; i < allProj.length; i++) {
		allProj[i].style.display = "none";
	}
	// show projects with certain class
	var projects = document.getElementsByClassName(c);
	for(i = 0; i < projects.length; i++) {
		projects[i].style.display = "block";
	}
}

function showAll(){
	var allProj = document.querySelectorAll('figure');
	for(i = 0; i < allProj.length; i++) {
		allProj[i].style.display = "block";
	}
}