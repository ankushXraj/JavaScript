var a = document.querySelector("h1")
console.log(a) 

// // CHANGING HTML
//  var a = document.querySelector("h1")
//   a .innerHTML  = "mere sath padhaoo" 

//   CHANGING CSS
   var a = document.querySelector("h1")
a.style.color= "red "  
a.style.backgroundColor = "yellow" 
a.style.fontSize = "100px" 
a.style.border = "2px solid black" 
    

 var a = document.querySelector("h1")
  a.addEventListener("click ",function(){ 
    a .innerHTML = "mere sath padhaoo"  
    a.style.color= "red "
    a.style.backgroundColor = "yellow"

   console.log("h1 is clicked")
})