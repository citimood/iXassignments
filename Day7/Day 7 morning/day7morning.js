
var shadow = document.querySelectorAll(".lightbox")[0];

shadow.onclick = function()
{
	var div=document.getElementById("lightbox");
	div.classList.remove('isVisible');
}

function getFormValues() 
{
	var first_name=document.getElementById("first");
	var last_name=document.getElementById("last");
	
	console.log(first_name.value+" "+last_name.value);
}

function changeColor()
{
	var div=document.getElementById("color-div");
	div.style.color='red';
}

function toggleImage() 
{
	
	var div=document.getElementById("lightbox");
	/* div.classList.remove('.lightbox'); */
	div.classList.add('isVisible');

}

document.getElementById("name-btn").onclick = function() {
	getFormValues();
};