const builder = document.querySelectorAll('.build');
if(builder){
	builder.forEach((item) => {
		item.addEventListener('click', e => {
			let target = e.target.parentNode.children[1];
			if(!target.classList.contains('show')){
				target.classList.add('show');
				target.classList.remove('hide');
			}
			else{
				target.classList.remove('show');
				target.classList.add('hide');
			}
		})
	})
}

let myEdit = document.querySelectorAll('.mybutton');
for (var i = 0;i<myEdit.length;  i++) {
 myEdit[i].addEventListener('click', function(){
 	if(document.querySelector('.pg-modal')) return document.querySelector('.pg-modal').style.display="none";
 })
}

/*document.querySelector('.mybutton').addEventListener('click', function(){

	document.querySelector('.modal-contents').style.display='flex';
});*/
let pagedeleted = document.querySelector('.pg-delete');
let model=document.querySelectorAll('.itemDeleted');

for(let i=0; i < model.length; i++){
  model[i].onclick=function() {
  	pagedeleted.style.display = "flex";
  	console.log(pagedeleted);
  }
}

let mybutton = document.querySelectorAll('.cancelPost, .deletePost');
for (var i = 0;i<mybutton.length;  i++) {
 mybutton[i].addEventListener('click', function(){
 	document.querySelector('.pg-delete').style.display="none"
 })
}

window.onclick = function(event) {
  if (event.target == pg_modal) {
    pg_modal.style.display = "none";
  }
  if (event.target == pagedeleted) {
    pagedeleted.style.display = "none";
  }
  if(!event.target.matches('.popup')){
  	console.log(event.target);
  }
}


