const result = document.getElementById("result");
let rando;
let health = 5;
function generateRandomNumber() {
  rando = Math.floor(Math.random() * 1000);
}
window.onload=function(){
  generateRandomNumber();
}
function guessNumber() {
  const guessEle = document.getElementById("guessnumber").value;
  if (guessEle == "") {
    showMassage("هنوز عددی وارد نکردی که");
    return;
  }
  if (guessEle == rando && guessEle > 0) {
    document.getElementById("fainalresult").innerHTML = rando;
    confirm("عالی بود درست حدس زدی ،می خوای دوباره بازی کنی؟");
    reset();
    return;
  }
  if (guessEle < rando) {
    showMassage("برو بالاتر");
    decreaseHealth();
  } else if (guessEle > rando) {
    showMassage("برو پایینتر");
    decreaseHealth();
  }
}
function decreaseHealth() {
  if (health <= 0) {
    confirm("دیگه جونی واسه ادامه دادن نداری !،می خوای دوباره بازی کنی؟");
    reset();
    return;
  }
  const heartEle = document.getElementById("heart" + health);
  heartEle.src = "/image/heart1.png";
  health--;
}

function reset() {
  generateRandomNumber();
  health = 5;
  for (let index = 1; index <= 5; index++) {
    const heartEle = document.getElementById("heart" + index);
    heartEle.src = "/image/heart2.png";
  }
  document.getElementById("guessnumber").value = "";
  showMassage("");
}
function showMassage(massage) {
  result.innerHTML = massage;
}
