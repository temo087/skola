const arrow = document.querySelectorAll(".arrow")
const h3 = document.querySelectorAll("h3")
const h4 = document.querySelectorAll("h4")
const chemikai = document.querySelectorAll(".flex1")

for(let i = 0; i < chemikai.length; i++){
    chemikai[i].addEventListener("click", () =>{
        h3[i].classList.toggle("different");
        for(let j = 0; j < chemikai.length; j++){
            if(j !== i){
                h3[j].classList.remove("different");
            }
        }
        arrow[i].classList.toggle("rotate");
        for(let j = 0; j < chemikai.length; j++){
            if(j !== i){
                arrow[j].classList.remove("rotate");
            }
        }
        h4[i].classList.toggle("active");
        for(let j = 0; j < chemikai.length; j++){
            if(j !== i){
                h4[j].classList.remove("active");
            }
        }
    })
}
