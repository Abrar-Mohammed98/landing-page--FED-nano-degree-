/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const myList = document.getElementById("navbar__list");
const mySec =document.querySelectorAll("section");

/**
 * End Global Variables

*/





// build the nav

   const creatNavBar = () =>{

    mySec.forEach((list) => {
    let navItems =document.createElement("li");
    myList.appendChild(navItems);
    addNav=list.getAttribute('id');
    navItems.innerHTML = `<a href="#${addNav}" class="menu__link">${addNav}</a>`; })
   };
   creatNavBar();



// Add class 'active' to section when near top of viewport

addEventListener("scroll", () => {

  mySec.forEach(section => {
    // determine if section is near top of viewport add active class
    let distance = section.getBoundingClientRect();
    if (distance.top <= 180 && distance.bottom >= 180 )
 {
      section.classList.add('your-active-class');
      section.style.cssText = "opacity: 0.8";

      // otherwise remove active class
    } else {
      section.classList.remove('your-active-class');
    }
  });
});

//determine active section 

addEventListener("scroll", ()=>{
  const myList = document.querySelectorAll("a")
    for(i = 0; i < mySec.length; i++){
        if(scrollY == mySec[i].offsetTop){
          myList.forEach(a => a.classList.remove("active-nav"))
          myList[i].classList.add("active-nav")
        }else{
          myList[i].classList.remove("active-nav")
        }
        
    }
  });


// smooth scroll when click to section nav
let scrollBehave= document.querySelectorAll(".menu__link")
scrollBehave.forEach(scroll => {
  scroll.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
      });  
  });
});




  
