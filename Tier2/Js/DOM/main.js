let user = document.getElementById("userName")
let pass = document.getElementById("pass")

let userForm = document.getElementById("sumbitDetail")

// submitDetail.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log(user.value);
//     console.log(pass.value);
    
// })

const getDetails = (e)=>{
    e.preventDefault();
    console.log(user.value);
    console.log(pass.value);
}

// onclick for click button tags
// onchange for a input tags events
// onsubmit while using form tags

// Tagname
// let btn = document.getElementsByTagName("button")[0]

// let btn = document.querySelector("#btn")
// let btn = document.querySelector(".btns")

// btn.addEventListener("click",()=>{
//     btn.textContent = "Clicked"
// })

let btn = document.querySelectorAll(".btns")

// btn.forEach((element)=>{
//     element.addEventListener("click",()=>{
//         element.innerHTML ="Clicked"
//     })
// })

let i =0

while(i<btn.length){
    btn[i].addEventListener("click",(e)=>{
        event.target.innerHTML = "Clicked"
    })
    i++
}