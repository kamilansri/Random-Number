const data = document.querySelector("#data")
const number = document.querySelector("#number")
const submit = document.querySelector("#submit")
const arr1 = document.querySelector("#arr1")
const left = document.querySelector("#left")

// let randomNumber = parseInt((Math.random()*100).toFixed(0))

let num = 1


    submit.addEventListener("click",function(){
     
        if(num < 5){
        let randomNumber = parseInt((Math.random()*100).toFixed(0))
        let value = parseInt(number.value)

    if(value===randomNumber){
        data.innerHTML = ` hurray you won !!`
    }

    else {
        data.innerHTML = `SORRY !! , The number is ${randomNumber}`
    }

   arr1.innerHTML += `${value}  `

   left.innerHTML = `Attempt Left : ${5-num} `

     num+=1
}

 else if(num === 5){
    submit.innerHTML = `Reset`

       let randomNumber = parseInt((Math.random()*100).toFixed(0))
        let value = parseInt(number.value)

    if(value===randomNumber){
        data.innerHTML = ` hurray you won !!`
    }

    else {
        data.innerHTML = `SORRY !! , The number is ${randomNumber}`
    }

   arr1.innerHTML += `${value}  `

   left.innerHTML = `Attempt Left : ${5-num} `

     num+=1
 }



}) 


 
