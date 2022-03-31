// burger menu
let menuBtn = document.querySelector('.burger__menu');
let menu = document.querySelector('.mobile__menu');
let disableScroll = document.querySelector('body');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  disableScroll.classList.toggle('body-scroll');
});

// select lang
let select = function () {
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');
  
	selectHeader.forEach(item => {
	  item.addEventListener('click', selectToggle);
	});
  
	selectItem.forEach(item => {
	  item.addEventListener('click', selectChoose);
	});
  
	function selectToggle() {
	  this.parentElement.classList.toggle('is-active');
	}
  
	function selectChoose() {
	  let folder = this.innerHTML,
		  select = this.closest('.select'),
		  currentFolder = select.querySelector('.select__current');
		  currentFolder.innerHTML = folder;
	  	  select.classList.remove('is-active');		
	}
};
  
select();
  





