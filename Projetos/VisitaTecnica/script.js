const photos = document.querySelectorAll('.photo');
const modal = document.querySelector('.modal');
const imagemAmpliada = document.querySelector('.imagem-ampliada');
const fecharModal = document.querySelector('.fechar-modal');
const botaoBaixar = document.getElementById('botao-baixar');

photos.forEach((photo) => {
  photo.addEventListener('click', () => {
    modal.style.display = 'flex';
    imagemAmpliada.src = photo.src;
  });
});

fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

botaoBaixar.addEventListener('click', () => {
  var imagem = document.querySelector('.imagem-ampliada');

  // Verifique se a imagem foi carregada
  if (imagem.complete) {
    // Crie um canvas
    var imgCanvas = document.createElement("canvas");
    var imgContext = imgCanvas.getContext("2d");
    imgCanvas.width = imagem.width;
    imgCanvas.height = imagem.height;

    // Desenhe a imagem no canvas
    imgContext.drawImage(imagem, 0, 0, imagem.width, imagem.height);

    // Crie um Blob a partir do canvas
    imgCanvas.toBlob(function (blob) {
      // Crie um URL para o Blob
      var url = window.URL.createObjectURL(blob);

      // Crie um link de download
      var link = document.createElement("a");
      link.href = url;
      link.download = "foto_visita_tecnica.jpg";
      link.click();

      // Libere o URL do Blob
      window.URL.revokeObjectURL(url);
    }, "image/jpeg");
  } else {
    alert("A imagem ainda está sendo carregada. Por favor, aguarde e tente novamente.");
  }
});
