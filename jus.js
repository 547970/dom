var btn_plus=document.querySelectorAll(".plus")
var btn_minus=document.querySelectorAll(".minus")
var btn=document.getElementsByClassName('btn')
console.log(btn_plus,btn_minus)
function plus(event){
    var elem=event.target.parentElement
    var num=elem.getElementsByClassName("count")
    var count=Number(num[0].innerText)
    var count=count+1;
    num[0].innerText=count;
    console.log(elem,num,count)
}
function minus(event){
    var elem=event.target.parentElement
    var num=elem.getElementsByClassName("count")
    var count=Number(num[0].innerText)
    var count=count-1;
    num[0].innerText=count;
}



