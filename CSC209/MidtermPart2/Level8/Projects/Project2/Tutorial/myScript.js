function addText() {
  document.getElementById("demo").innerHTML = "The sun is out during the day!";
}

function changeHeader() {
  document.getElementById("title").innerHTML = "Amherst College";
}

function guessNum(){
  // This guesses a number between [0-100]
  let num = Math.floor(Math.random() * 101);
  let element = document.getElementById('value');
  if(num <= 30){
    element.innerText = "I guessed a number between [0-30]. My number is " + num + "!";
  }
  else if (num <= 60){
    element.innerText = "I guessed a number between [31-60]. My number is " + num + "!";
  }
  else{
    element.innerText = "I guessed a number between [61-100]. My number is " + num + "!";
  }
}

function friendsList(){
  const friends = ["Sam", "John", "Eliza", "Karen", "Mike", "Justin", "Dave", "Rick", "Sarah", "Heather"];
  // guess a number between [0-10]
  let total = Math.floor(Math.random() * 10)
  let list = "";
  for (let i = 0; i < total; i++) {
    list += friends[i];
    //only adds comma if there will be more friends
    if (i !== total -1){
      list += ", ";
    }
  }
  document.getElementById("myfriends").innerText = list;
}

