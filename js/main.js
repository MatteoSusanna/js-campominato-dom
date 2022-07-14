const containerDom = document.getElementById('container');
const hDom = document.getElementById('punteggio');

//evento click crea gliglia
document.getElementById('play').addEventListener('click',
        function(){

            containerDom.innerHTML = '';
            
            let attiva = 0;


                for (let i = 1; i <= 100; i++){

                    let casual = numeroRandom( 1, 100);
                    
                    let element = griglia(casual);
                    
                    //evento click box griglia
                    element.addEventListener('click',
                         function(){
                            
                            //se è divisibile per 6 è una bomba
                            if (casual % 6 == 0){
                                this.classList.add('bomb')
                                alert('HAI PERSO il tuo punteggio è di ' + attiva + ' punti')
                                attiva-- 
                            }else {
                                if(this.classList.contains('normal')){
                                    attiva--
                                }
                                this.classList.add('normal')
                                 //punteggio
                                attiva++
                                hDom.innerHTML = `<h3>IL PUNTEGGIO E' ${attiva}</h3>`
                                
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




//funzione per creare la griglia

function griglia (numeroInternoAlBox){
    //creazione box compongono la griglia
    let element = document.createElement('div');
    element.classList.add('box');


    //creazione boxnumero
    let numeroInterno = document.createElement('div');
    numeroInterno.classList.add('numeroInterno');
    numeroInterno.append(numeroInternoAlBox);


    element.append(numeroInterno);
    return element;
}