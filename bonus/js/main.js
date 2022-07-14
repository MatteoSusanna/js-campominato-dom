const containerDom = document.getElementById('container');
const hDom = document.getElementById('punteggio');
let selectDom = document.getElementById('select');
let perso = false;

let myArray = [];
//evento click crea gliglia
document.getElementById('play').addEventListener('click',
        function(){

            containerDom.innerHTML = '';
                        
            let attiva = 0;
            
            //reset
            perso = false;
            myArray = [];

            if( selectDom.value == 'easy' ){
                for (let i = 1; i <= 100; i++){

                    let casual = numeriUnici (1, 100);
                    let element = griglia(casual);

                    //evento click box griglia
                    element.addEventListener('click',
                         function(){
                            //se è divisibile per 6 è una bomba
                        if(perso == false){
                            
                            if (casual % 6 == 0){
                                perso = true;
                                this.classList.add('bomb');
                                alert('HAI PERSO il tuo punteggio è di ' + attiva + ' punti');
                            }else {
                                if(this.classList.contains('normal')){
                                    attiva--;
                                }
                                this.classList.add('normal');
                                attiva++;
                                hDom.innerHTML = `<h3>IL PUNTEGGIO E' ${attiva}</h3>`;
                            }  
                        }    
    
                        }
                    );
                    containerDom.append(element);            
                }  

            }else if ( selectDom.value == 'normale' ){

                for (let i = 1; i <= 81; i++){

                    let casual = numeriUnici (1, 81);
                    let element = griglia(casual);

                    element.style.height = 'calc(100% / 9)'
                    element.style.width = 'calc(100% / 9)'

                    //evento click box griglia
                    element.addEventListener('click',
                         function(){
                            //se è divisibile per 6 è una bomba
                        if(perso == false){
                            
                            if (casual % 5 == 0){
                                perso = true;
                                this.classList.add('bomb');
                                alert('HAI PERSO il tuo punteggio è di ' + attiva + ' punti');
                            }else {
                                if(this.classList.contains('normal')){
                                    attiva--;
                                }
                                this.classList.add('normal');
                                attiva++;
                                hDom.innerHTML = `<h3>IL PUNTEGGIO E' ${attiva}</h3>`;
                            }  
                        }    
    
                        }
                    );
                    containerDom.append(element);            
                }

            }else{

                for (let i = 1; i <= 49; i++){

                    let casual = numeriUnici (1, 49);
                    let element = griglia(casual);
                    element.style.height = 'calc(100% / 7)'
                    element.style.width = 'calc(100% / 7)'

                    //evento click box griglia
                    element.addEventListener('click',
                         function(){
                            //se è divisibile per 6 è una bomba
                        if(perso == false){
                            
                            if (casual % 3 == 0){
                                perso = true;
                                this.classList.add('bomb');
                                alert('HAI PERSO il tuo punteggio è di ' + attiva + ' punti');
                            }else {
                                if(this.classList.contains('normal')){
                                    attiva--;
                                }
                                this.classList.add('normal');
                                attiva++;
                                hDom.innerHTML = `<h3>IL PUNTEGGIO E' ${attiva}</h3>`; 
                            }  
                        }    
    
                        }
                    );
                    containerDom.append(element);            
                }
            }



                      
        }
);

//funzione numero radomico
function numeroRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function numeriUnici(min, max){
    let numeroRand = numeroRandom(min, max);

    while(myArray.includes(numeroRand)){
        numeroRand = numeroRandom(min, max);
    }

    myArray.push(numeroRand);
    
    return numeroRand;
}



//funzione per creare la griglia

function griglia(numeroInternoAlBox){
    //creazione box compongono la griglia
    let element = document.createElement('div');
    element.classList.add('box');


    //creazione boxnumero
    let numeroInterno = document.createElement('div');
    numeroInterno.classList.add('numeroInterno');
    numeroInterno.append(numeroInternoAlBox);


    element.append(numeroInterno)
    return element;
}