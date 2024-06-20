// console.log("js file linked successfully");

//Select elements

var likes = Array.from(document.querySelectorAll(".fa-heart"));

var cards=Array.from(document.querySelectorAll(".card"));
console.log(cards);
var trashs = Array.from(document.querySelectorAll(".fa-trash"));

var plusbtns = Array.from(document.querySelectorAll(".fa-circle-plus"));
var minusbtns = Array.from(document.querySelectorAll(".fa-circle-minus"));


for(let plusbtn of plusbtns){
    plusbtn.addEventListener("click", function(){
       plusbtn.nextElementSibling.innerHTML= parseInt(plusbtn.nextElementSibling.innerHTML)+1
       total()
       console.log(plusbtns);
    })
}


for (let minusbtn of minusbtns) {
  minusbtn.addEventListener("click", function () {
    minusbtn.previousElementSibling.innerHTML =
      parseInt(minusbtn.previousElementSibling.innerHTML)>0 ? minusbtn.previousElementSibling.innerHTML - 1 : 0;
    total();
    console.log(minusbtn);
  });
}

//like buttons
for(let like of likes){
    like.addEventListener("click", function(){
        if(like.style.color !=="red"){
            like.style.color = 'red'
        }else{
            like.style.color = 'black'
        }
    })
}

//delete buttons
for(let i in trashs) {
    trashs[i].addEventListener("click", function(){
        cards[i].remove();
        total();
    })

}

function total(){
    let s =0;
    let prices = Array.from(document.querySelectorAll(".price"))
    let qte = Array.from(document.querySelectorAll(".qte"))

    for (let i in qte){
        s += parseInt(prices[i].innerHTML) * parseInt(qte[i].innerHTML)
    }
    document.getElementById("total-price").innerHTML = s;
}





