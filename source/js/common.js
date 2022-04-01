// burger menu
const openMobileMenuBtn = document.querySelector(".burger__menu");
const closeMobileMenuBtn = document.querySelector("burger__menu-cancel")
const mobileMenu = document.querySelector(".mobile__menu");
const disableScrollOnSite = document.querySelector('body');

openMobileMenuBtn.addEventListener("click", () => {
	if (mobileMenu.classList.contains("active")) {
		
	} else {
		mobileMenu.classList.add("active");
		openMobileMenuBtn.classList.add("active");
		disableScrollOnSite.classList.add("body-scroll");
	}
});





// select lang
const select = function () {
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
  





