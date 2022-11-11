var btnplus=document.getElementsByClassName("plus-btn")
var btnminus=document.getElementsByClassName("minus-btn")
var quantnvar=document.getElementsByClassName("Quant")
var btndelete=document.querySelectorAll(".delete")
var pricetotal=document.getElementById("finalPrice")
var price=document.getElementsByClassName("price")



for (let nouri = 0; nouri <btnplus.length ; nouri++){
    btnplus[nouri].addEventListener("click",function(){quantnvar[nouri].value++
    calcul()})
}

for (let nouri = 0; nouri <btnminus.length ; nouri++){
    btnminus[nouri].addEventListener("click",function(){
        if(quantnvar[nouri].value>0){quantnvar[nouri].value--
        calcul()}})
}

for (let nouri = 0; nouri <btndelete.length ; nouri++){
    btndelete[nouri].addEventListener("click",function(){btndelete[nouri].parentNode.remove()
        calcul()
    })
}


function calcul(){
    var total=0
    for (let nouri = 0; nouri <price.length ; nouri++){
 total+= parseInt(price[nouri].innerText)*quantnvar[nouri].value
    
}
pricetotal.value=total

}



var likes=document.getElementsByClassName("like")
for(let nouri=0;nouri<likes.length;nouri++){
     let heart=likes[nouri]
     heart.addEventListener("click", function(){
      if( heart.firstChild.style.color=="black"){
        heart.firstChild.style.color="red"
      }
      else{
        heart.firstChild.style.color="black"
      }
   
     })
}
