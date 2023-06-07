/*Atualizando atributos HTML com JavaScript*/
function toggleMode () {
  const html = document.documentElement
  html.classList.toggle("light")

  /*Pegar a tag img*/
  const img = document.querySelector("#profile img")
  /*substituir a imagem*/
  if (html.classList.contains("light")) {
    /*SE tiver light mode, adicionar a imagem light*/
    img.setattribute("src", "./Avatar-light.png")
  } else {
    /*se tiver sem light mode, manter a imagem normal*/
    img.setattribute("src", "./Avatar.png")
  }
}