const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn= document.getElementById("btn")
const  color = document.querySelector(".color")


btn.addEventListener("click", ()=>{
    const randomNumber = getRandomNumber() 
    document.body.style.background = colors[randomNumber]

    color.innerHTML = colors[randomNumber]
} )

const getRandomNumber= () =>{
    return Math.floor(Math.random()*colors.length)
}

