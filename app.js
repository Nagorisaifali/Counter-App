let inc = document.querySelector(".btn1") ; 
let dec = document.querySelector(".btn2") ; 

let num = document.querySelector(".number") ; 
let body = document.querySelector("body") ; 
let h1 = document.querySelector("h1")
let cnt = 0 ; 

inc.addEventListener("click" , function(){
    cnt += 1 ; 
    num.innerHTML = cnt ; 
    
    let color = "#" ; 
    color += Math.random().toString().slice(2,8) ;
    body.style.background = color ; 
    document.querySelector(".number").style.color = color ; 

    if(color == colorr){
        h1.innerHTML = "the color is same the hexacolor"
    }

})


dec.addEventListener("click" , function(){
    cnt -= 1 ; 
    num.innerHTML = cnt ; 

    let color = "#" ; 
    color += Math.random().toString().slice(2,8) ;
    body.style.background = color ;  
    let colorr = document.querySelector(".number").style.color = color ; 

    if(color == colorr){
        h1.innerHTML = "the color is same the hexacolor"
    }
})
