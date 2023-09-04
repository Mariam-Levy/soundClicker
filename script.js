const sounds = ['else', 'guns', 'shania', 'one', 'memories', 'girls']; // Array que contiene los nombres de las canciones
let currentSound = null; // declaraion de una variable que se usara para rastrear la cancion que se este reproduccion actualmente

//Bucle 'forEach' para recorrer cada elemento del array y ejecutar una funcion para cada uno.
sounds.forEach(function(sound) {
    const btn = document.createElement('button'); //Crea un elemento de boton por cada nombre de cancion
    btn.classList.add('btn'); //se agrega la clase 'btn' al botton para aplicar estilos predeterminados en el css
    btn.innerHTML = sound; //se establece el texto del boton como nombre de la cancion


    //Evento click al boton
    btn.addEventListener('click', function() {
        //Verifica si la cancion en reproduccion actual coincide con la cancion del boton
        if (currentSound === sound) {
            stopSong(sound); //si coincide, se aplica la funcion 'stopSong', para detener la cancion
            currentSound = null; //se estable 'currentSound' como null para indicar que no hay ninguna cancion en reproduccion
        } else {
            // Si no coincide, o si no hay ninguna canción en reproducción,
            // se llama a 'stopSong' para detener todas las canciones:
            stopSong();
            document.getElementById(sound).play(); // Luego, se reproduce la canción correspondiente al botón clicado.
            currentSound = sound; // Se actualiza 'currentSound' con el nombre de la nueva canción en reproducción.
        }
    });
    // Se agrega el botón al elemento del DOM con el ID 'buttons'.
    document.getElementById('buttons').appendChild(btn);
});

// Definición de la función 'stopSong' que se utiliza para detener una o todas las canciones.
function stopSong(soundToStop) {
    // Se ejecuta un bucle 'forEach' para cada elemento en el array 'sounds'.
    sounds.forEach( function(sound) { 
        const song = document.getElementById(sound); //busca el elemento de audio correspondiente a esa canción específica por su id y lo almacena en una variable
        //Verifica si se debe detener la cancion actual (si soundToStop no se proporciona o si soundToStop coincide con la cancion actual)
        if(soundToStop === undefined || soundToStop === sound) {
            song.pause(); // Se pausa la reproducción de la canción.
            song.currentTime = 0; // Se reinicia el tiempo de reproducción al inicio.
        }
    });
} 
