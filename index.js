var oa=document.querySelectorAll('.card')
var goNext=document.getElementById("next");
var goPrev=document.getElementById("prev");
counter=0
var intervalId;
oa.forEach(
    (card, index)=>{
        card.style.left =`${index*20}%`;

    }
);

var slideCard=()=>{
    oa.forEach(
(card)=>{
    card.style.transform =`translateX(-${counter * 20}%)`
}


)
};





goNext.addEventListener('click', function(){
  
    if(counter===15){
        counter=0

    }
    else{
        counter++;
    }


           
        
    


   slideCard()
});




intervalId = setInterval(function() {
    if (counter === 15) {
        counter = 0;
    } else {
        counter++;
    }

    slideCard(); // Call slideCard every interval
}, 2000);




goPrev.addEventListener('click', function(){
   
      
    if(counter===0){
        counter=15

    }
    else{
        counter--;
    }
   slideCard()
});