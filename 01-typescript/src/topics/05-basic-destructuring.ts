
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
}

const song = 'New song'
const { song:anotherSong , songDuration: duration } = audioPlayer;
const { author } = audioPlayer.details;

console.log("Song: ", anotherSong);// Al poner anotherSong ya no se pisa con song
console.log("Song: ", song);


// Desestrucuración de Arreglos

const [, ,trunks] = ['Goku','Vegeta','Trunk']// Podemos llegar a trunks usando las comillas
//const trunk = dbz[3] || 'No hay personaje'

//console.log('Personake 3: ', dbz[3] || 'No hay personaje') // En el caso de que no haya 3, usaremos el Or
console.log(trunks);