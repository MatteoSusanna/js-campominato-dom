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
                    
                    //evento click cambio colore red
                    element.addEventListener('click',
                         function(){
                            

                            if (casual % 6 == 0){
                                this.style.backgroundColor = 'red';
                                this.style.color = 'white';
                                alert('Hai perso')
                            }else {
                                this.style.backgroundColor = 'blue';
                                this.style.color = 'white';
                            }
                            

                            //punteggio
                            attiva++
                            hDom.innerHTML = `<h3>IL PUNTEGGIO E' ${attiva}</h3>`
    
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

/*
    element.addEventListener('click',
        function(){
            if(numeroInternoAlBox % 6 == 0){
                this.style.backgroundColor = 'red';
                this.style.color = 'white';
            }

        }
    )
 */ 

    //creazione boxnumero
    let numeroInterno = document.createElement('div');
    numeroInterno.classList.add('numeroInterno');
    numeroInterno.append(numeroInternoAlBox);


    element.append(numeroInterno);
    return element;
}