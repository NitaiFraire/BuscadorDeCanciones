import * as UI from './interfaz.js';
import { API } from './api.js';

UI.formularioBuscar.addEventListener('submit', (e) => {

    e.preventDefault();

    // obtener datos del fomulario
    const artista = document.querySelector('#artista').value,
          cancion = document.querySelector('#cancion').value;

    // campos vacios
    if(artista === '' || cancion === ''){

        UI.divMensajes.innerHTML = 'Error... todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');
        
        setTimeout(() => {
            
            UI.divMensajes.innerHTML = '';
            UI.divMensajes.classList.remove('error');


        }, 3000);
    
    // formulario completo
    }else{

        const api = new API(artista, cancion);
        api.consultarApi()
           .then(data => {

                console.log(data);
           });
    }

});
console.log(UI);