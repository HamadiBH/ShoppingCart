let minusbtns = Array.from(document.getElementsByClassName('less'));
let quant = Array.from(document.getElementsByClassName('quant'));
let plusbtns = Array.from(document.getElementsByClassName('more'));
let prices = Array.from(document.getElementsByClassName('price'));
let favs = Array.from(document.getElementsByClassName('fav'));
let crosses = Array.from(document.getElementsByClassName('cross'));
let articles = Array.from(document.getElementsByClassName('article'));
let total= document.getElementById('total');



for(let i=0; i<quant.length; i++){


    minusbtns[i].addEventListener("click", function(e){

        quant[i].innerText-- 

        if(quant[i].innerText<0){

            quant[i].innerText=0
        };
        totalll ();
        
    });
    
    plusbtns[i].addEventListener("click", function(e){
    
        quant[i].innerText++; 
        totalll ();
       
    });

    const totalll=()=>{
        let somme=0
        for (let j=0; j<quant.length; j++){
    
            somme+= parseInt(quant[j].innerText) * parseInt (prices[j].innerText);

        };
        total.innerText=somme;
    }
    favs[i].addEventListener("click", function(f){
    
        favs[i].classList.toggle("icon-red");
    });

    crosses[i].addEventListener("click", function(g){

        articles[i].style.display="none";
        quant[i].innerText=0;
        
        totalll ();
        
    });
    
    
};



