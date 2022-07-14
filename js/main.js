const containerDom = document.getElementById('container');
const hDom = document.getElementById('punteggio');

//evento click crea gliglia
document.getElementById('play').addEventListener('click',
        function(){

            containerDom.innerHTML = '';
            let attiva = 0;
            

                for (let i = 1; i <= 100; i++){

                    let element = griglia(i);
                    
                    //evento click cambio colore red
                    element.addEventListener('click',
                         function(){
                            this.style.backgroundColor = 'red';
                            this.style.color = 'white';
                            console.log(i);

                            //punteggio
                            attiva++
                            hDom.innerHTML = `<h3>IL PUNTEGGIO E' ${attiva}</h3>`
    
                        }
                    );
                    containerDom.append(element);            
                }        
        }
);


//funzione per creare la griglia

function griglia (numeroInternoAlBox){
    //creazione box compongono la griglia
    let element = document.createElement('div');
    element.classList.add('box');


    element.append(numeroInternoAlBox);
    return element;
}