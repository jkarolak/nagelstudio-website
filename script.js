const scrollToItemRange = document.querySelector(".rangeItem");

if(scrollToItemRange){
    scrollToItemRange.addEventListener("click", function(){
                    window.scroll({
                    top: document.querySelector(".range").offsetTop,
                    behavior: 'smooth'  // 👈 
                });
    })
}
const scrollToItemContact = document.querySelector(".contactItem");

if(scrollToItemContact){

    scrollToItemContact.addEventListener("click", function(){
                    window.scroll({
                    top: document.querySelector(".contact").offsetTop,
                    behavior: 'smooth'  // 👈 
                });
    })
}



