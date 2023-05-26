const move = document.querySelector('.move');
let counter = 0
function btn_left(){
    if(counter === -1920){}
    else{
        counter -= 240
        move.style.left = counter + "px";
    }
}

function btn_right(){
    if(counter === 0){}
    else{
        counter += 240
    move.style.left = counter + "px"
    }
}



// let move_counter = 0
//     let id = setInterval(() => {
//         if(move_counter === counter){
//             clearInterval(id)
//         }
//         move.style.right = move_counter + "px";
//         move_counter++;
//     }, 0.5);
let img = document.querySelectorAll(".ani-img-3d");
let divHidden = document.querySelectorAll(".zindex");

let div = [...document.querySelectorAll(".ani-3d")].map((item, index) => {
   item.addEventListener("mouseover", () => {
      img[index].classList.add("animation-3d");
      divHidden[index].classList.add("zani");
   });
   item.addEventListener("mouseout", () => {
      img[index].classList.remove("animation-3d");
      divHidden[index].classList.remove("zani");
   });
});

let num = document.querySelectorAll(".num");

addEventListener("scroll", () => {
   if (window.scrollY >= 1750) {
      console.log("true");
      let counter = 1;
      setInterval(() => {
         [...num].map((item, index) => {
            if (index === 0 && counter <= 30) {
               item.innerHTML = counter;
            } else if (index === 1 && counter <= 40) {
               item.innerHTML = counter;
            } else if (index === 2 && counter <= 50) {
               item.innerHTML = counter;
            } else if (index === 3 && counter <= 60) {
               item.innerHTML = counter;
            }
            counter++;
         });
      }, 100);
   }
});

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let formsignin = document.querySelector("#form1")
let formsignup = document.querySelector("#form2")

btn1.addEventListener("click",()=>{
    btn1.style.backgroundColor = "#20bfad"
    btn2.style.backgroundColor = "#dcf2ef"
    setTimeout(() => {
        formsignin.classList.remove("d-none")
        formsignup.classList.add("d-none")
    }, 400);
    formsignup.classList.add("animation-for-forms")
    
})/* sign in */
btn2.addEventListener("click",()=>{
    btn2.style.backgroundColor = "#20bfad"
    btn1.style.backgroundColor = "#dcf2ef"
    setTimeout(() => {
        formsignup.classList.remove("d-none")
        formsignin.classList.add("d-none") 
    }, 400);
    formsignin.classList.add("animation-for-forms")
})/* sign up */

