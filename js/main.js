const containerDom = document.getElementById('container');
const hDom = document.getElementById('punteggio');
let risultatoDom = document.getElementById('risultato');
let perso = false;

let myArray = [];
//evento click crea gliglia
document.getElementById('play').addEventListener('click',
        function(){

            //reset
            containerDom.innerHTML = '';
            risultatoDom.innerHTML = ''
            let attiva = 0;
            perso = false;
            myArray = [];
            

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
                                risultatoDom.innerHTML = `<h2>HAI PERSO il tuo punteggio è di ${attiva}</h2>`;
                            }else {
                                if(this.classList.contains('normal')){
                                    attiva--;
                                }
                                this.classList.add('normal');
                                attiva++;
                                hDom.innerHTML = `<h3>IL PUNTEGGIO E' ${attiva}</h3>`;
                                if(attiva == 84){
                                    risultatoDom.innerHTML = `<h1>HAI VINTO!!!!!!</h1>`
                                }
                            }  

                        }    
    
                        }
                    );
                    containerDom.append(element);            
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

    return element;
}