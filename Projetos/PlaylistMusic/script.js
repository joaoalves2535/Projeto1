let musicas = [
    { img: 'imagens/imagem1.jpeg', titulo: 'Os anjos te louvam', artista: 'Eli Soares', src: 'musicas/Eli Soares - Os Anjos Te Louvam.mp3' },
    { img: 'imagens/imagem2.jpg', titulo: 'Quem é esse', artista: 'Eli Soares', src: 'musicas/Eli Soares - Quem É Esse_ (Lyric Video).mp3' },
    { img: 'imagens/imagem3.jpg', titulo: 'Eu sou', artista: 'Eli Soares', src: 'musicas/Eli Soares - Eu Sou.mp3' },
    { img: 'imagens/imagem4.jpg', titulo: 'Graça', artista: 'Eli Soares', src: 'musicas/Eli Soares - Graça (Ao Vivo Na Penha, Rio De Janeiro).mp3' },
    { img: 'imagens/imagem5.png', titulo: 'Se eu cair', artista: 'Eli Soares', src: 'musicas/Eli Soares - Se Eu Cair.mp3' },
    { img: 'imagens/imagem6.jpg', titulo: 'Tudo que eu sou', artista: 'Eli Soares', src: 'musicas/Eli Soares - Tudo Que Eu Sou.mp3' },
    { img: 'imagens/imagem7.jpg', titulo: 'Me leva pra casa', artista: 'Israel Subirá', src: 'musicas/Me Leva Pra Casa.mp3' },
    { img: 'imagens/imagem8.jpeg', titulo: 'Postura do Reino', artista: 'Morada', src: 'musicas/POSTURA DO REINO _ MORADA (AO VIVO).mp3' },
    { img: 'imagens/imagem9.jpeg', titulo: 'Puro e Simples', artista: 'Morada', src: 'musicas/Puro e Simples - Morada (Ao Vivo).mp3' },
    { img: 'imagens/imagem10.jpg', titulo: 'Só tu és Santo', artista: 'Morada', src: 'musicas/SÓ TU ÉS SANTO - UMA COISA - DEIXA QUEIMAR - QUANDO ELE VEM _ MORADA (AO VIVO).mp3' }
];



let musica = document.querySelector('audio');
let indexMusica = 0;

let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let banda = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

let duracaoMusica = document.querySelector('.final');

let play = document.querySelector('.botao-play');
play.addEventListener('click', tocarMusica);
let pause = document.querySelector('.botao-pause');
pause.addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 9;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 9) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

function tocarMusica() {
    musica.play();
    play.style.display = 'none';
    pause.style.display = 'block';
}

function pausarMusica() {
    musica.pause();
    play.style.display = 'block';
    pause.style.display = 'none';
}

function atualizarBarra() {
    var barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;
}

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        imagem.src = musicas[index].img;
        nomeMusica.textContent = musicas[index].titulo;
        banda.textContent = musicas[index].artista;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
        if (play.style.display === 'block') {
            musica.pause();
        }
        else if (play.style.display === 'none') {
            musica.play();
        }
    })
}