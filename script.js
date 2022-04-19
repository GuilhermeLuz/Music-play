let musicas = [
    {nome:"Faded", 
    artista:"Alan Walker", 
    img:"./imagens/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg", 
    src:"./audios/X2Download.com - Alan Walker - Faded (Sep Remix) (128 kbps).mp3",
    style: 'background-color : #0048fb'},
    
    {nome:"Cartoon", 
    artista:"On & On", 
    img:"./imagens/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg", 
    src:"./audios/X2Download.com - Cartoon - On & On (feat. Daniel Levi) [NCS Release] (128 kbps).mp3",
    style: 'background-color : #6103b4'},

    {nome:"Janji", 
    artista:"Heroes", 
    img:"./imagens/xandro-vandewalle-L2fD0IIpXXc-unsplash.jpg", 
    src:"./audios/X2Download.com - Janji - Heroes Tonight (feat. Johnning) [NCS Release] (128 kbps).mp3",
    style: 'background-color : #308a2d'},

    
    {nome:"Specktrem", 
    artista:"Shine", 
    img:"./imagens/zac-bromell-IJRMI1BGPbw-unsplash.jpg", 
    src:"./audios/y2meta.com - Spektrem - Shine [NCS Release] (320 kbps).mp3",
    style: 'background-color : #9a0321'}, 
]

let musica = document.querySelector('audio');
let tr = document.querySelector('.tr');
let tm = document.querySelector('.tm');
let imagem = document.querySelector('.imagem');
let nomeMusica = document.querySelector('.nomemusica h2');
let nomeArtista = document.querySelector('.nomemusica i');
let body = document.querySelector('body');
let indexMusica = "0";



// Envets

trocarMusica(indexMusica)
document.querySelector('.play').addEventListener('click', playmusica);
document.querySelector('.pause').addEventListener('click', pausemusica);
musica.addEventListener('timeupdate', barramusica);
document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > musicas.length){
        indexMusica = 0
    }
    trocarMusica(indexMusica)
    playmusica()
})
document.querySelector('.anterior').addEventListener('click', () => {
   indexMusica--;
   if(indexMusica < 0){
       indexMusica= musicas.length - 1 ;
   }
   trocarMusica(indexMusica)
   playmusica()
})

// functions  

function trocarMusica(index) {
    
    musica.setAttribute("src", musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        
        imagem.src = musicas[index].img; 
        nomeMusica.textContent = musicas[index].nome;
        nomeArtista.textContent = musicas[index].artista;
        tm.textContent = minutossegundos(Math.floor(musica.duration));
        body.setAttribute('style', musicas[index].style)
    })


}



function playmusica() {
    musica.play();
    document.querySelector('.play').style.display = "none"
    document.querySelector('.pause').style.display = "inline"

}

function pausemusica() {
    musica.pause();
    document.querySelector('.pause').style.display = "none";
    document.querySelector('.play').style.display = "inline";
}

function barramusica() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + "%";

    tr.textContent = minutossegundos(Math.floor(musica.currentTime))



}
function minutossegundos(segundos) {
    let minutos = segundos / 60;
    let segundo = segundos % 60;
    if (segundo < 10) {
        segundo = '0' + segundo
    }
    return Math.floor(minutos) + ':' + segundo





}

