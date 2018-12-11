var view1= document.getElementById("view1");
var view2= document.getElementById("view2");


view1.style.display="block";
view2.style.display="none";

document.querySelector("#start").addEventListener("click",function(){
	view1.style.display="none";
	view2.style.display="block";
	// winner.style.display="block";
});

document.querySelector("#restart").addEventListener("click",function(){
	view1.style.display="block";
	view2.style.display="none";
	// winner.style.display="none";
});

