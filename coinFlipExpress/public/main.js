const img = {
  heads: "images/heads.png",
  tails: "images/tails.png",
  coinImg: document.getElementById("coinImg")
}
const btn = {
  all: document.querySelectorAll('.button'),
  heads: document.querySelectorAll(".heads")[0],
  tails: document.querySelectorAll(".tails")[0],
  reset: document.getElementById("reset")
}
const game = {
  score: 0,
  msg: document.getElementById("msg"),
  click(){
    let button = [btn.heads, btn.tails]
    button.forEach((play) =>{
      play.addEventListener("click", (e) =>{
        game.flipCoin()
        game.displayImg()
        game.checkCoin(e)
      })
    })
  },
  flipCoin(){
    const randomNum = Math.random();
    if(randomNum<0.5){
      return img.heads
    }
    return img.tails
  },
  displayImg(){
    const imgSrc = game.flipCoin()
    img.coinImg.src = imgSrc;
  },
  checkCoin(e){
    if((e.target.classList.contains("heads") && ( img.coinImg.getAttribute("src") == img.heads))){
      game.msg.innerHTML = "Winner winner chicken dinner, You Guessed Heads!"
      game.score++
      game.printScore()
    } else if (e.target.classList.contains("tails") && (img.coinImg.getAttribute("src") == img.tails)){
      game.msg.innerHTML = "Winner winner chicken dinner, You Guessed Tails!"
      game.score++
      game.printScore()
    } else{
      game.msg.innerHTML = "You lost"
    }

  },
  printScore(){
    let score = document.getElementById("score")
    score.innerHTML = game.score
  },
  reset(){
  game.score= 0
  game.printScore()
  img.coinImg.src = img.heads
  game.msg.innerHTML = ""
  }
}

game.click()
btn.reset.onclick = game.reset
