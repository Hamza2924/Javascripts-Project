const element = document.getElementById("txtcount");
let c=0;
function counter(){
  c++;
    element.value =c+0 ;
}
function reset(){
   element.value=0;
}