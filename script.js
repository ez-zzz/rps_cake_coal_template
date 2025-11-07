alert('welcome to this wonderful game!');
let username = prompt('please enter your user name');
document.getElementById('username').textContent = username;
 
alert('welcome! ' + username + '!')
alert('you are going to play rock paper scissors VS your computer')
alert('if you win, you receive a cake, lose, receive coal and fireworks!!!!!!!!!')

//button sound 
const sound = new Audio('./assets/mouse-click.mp3')
const winsound = new Audio('./assets/firework.mp3')
const draw = new Audio('./assets/you-loss.mp3')
const lost = new Audio('./assets/lost.mp3')


let coal = document.createElement('img');
coal.src = './assets/coal.jpg';
coal.width = 200; 
coal.height = 200;


let cake = document.createElement('img');
cake.src = './assets/cake_image.jpg';
cake.width = 200;
cake.height = 200;


let bomb = document.createElement('img');
bomb.src = './assets/bomb-pic.jpg';
bomb.width = 200;
bomb.height = 200;

let dog = document.createElement('img');
dog.src = './assets/dog-pic.jpg';
dog.width = 200;
dog.height = 200;

let firework = document.createElement('img');
firework.src = './assets/firework-pic.jpg';
firework.width = 200;
firework.height = 200;

function score (){
    alert('give a rank from one to 5, click next to continue')
    let num1 = parseInt(prompt("Do you like the sound effect?"));
    let num2 = parseInt(prompt("Do you like the pictures?"));
    let num3 = parseInt(prompt("Do you like your game result?"));
    const total = num1 + num2 + num3

    function calc(a,b, c)
    {
        return a+b+c
    }
    let val = calc(num1, num2, num3)
    return val;
}

 
 

function play_rps()
{
    choice = prompt('choose one: rock, paper, or scissors')

    while (choice != 'rock' && choice != 'paper' && choice != 'scissors')
    {
        alert('invalid choice!')
        choice = prompt('choose one: rock, paper, or scissors')
    }

    computer_choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * computer_choices.length);
    computer_choice = computer_choices[randomIndex]

    if (computer_choice == choice) 
    {
        alert('draw!')
        document.getElementById('rps').innerHTML = "";
        document.getElementById('rps').appendChild(dog)
        draw.play();
    }
    else if (computer_choice == 'rock' && choice == 'paper') 
    {
        alert('User wins!')
        document.getElementById('rps').innerHTML = "";
        document.getElementById('rps').appendChild(cake)
        setTimeout(function() {
  console.log("This message appears after a 2-second delay.");
}, 2000); // 2000 milliseconds = 2 seconds
document.getElementById('rps').appendChild(firework)
        winsound.play();
    }
    else if (computer_choice == 'paper' && choice == 'rock') 
    {
        alert('Computer wins!')
        document.getElementById('rps').innerHTML = "";
        document.getElementById('rps').appendChild(bomb)
        lost.play();
    }
    else if (computer_choice == 'scissors' && choice == 'rock') 
    {
        alert('User WINS!!!!')
        document.getElementById('rps').innerHTML = "";
        document.getElementById('rps').appendChild(cake)
        setTimeout(function() {
  console.log("This message appears after a 2-second delay.");
}, 2000); // 2000 milliseconds = 2 seconds
document.getElementById('rps').appendChild(firework)
        winsound.play();
  
    }
    else if (computer_choice == 'scissors' && choice == 'paper') 
    {
        alert('Computer wins....')
        document.getElementById('rps').innerHTML = "";
        document.getElementById('rps').appendChild(bomb)
        lost.play();
    }
     else if (computer_choice == 'paper' && choice == 'scissors') 
    {
        alert('User WINS!!!!')
        document.getElementById('rps').innerHTML = "";
        document.getElementById('rps').appendChild(cake)
        setTimeout(function() {
  console.log("This message appears after a 2-second delay.");
}, 2000); // 2000 milliseconds = 2 seconds
document.getElementById('rps').appendChild(firework)
        winsound.play();
    }
     else 
    {
        alert('Computer WINNSSSS....')
        document.getElementById('rps').innerHTML = "";
        document.getElementById('rps').appendChild(bomb)
        lost.play();
    }

}

document.getElementById('game').addEventListener('click', (e) =>{
    sound.play();
    play_rps();
})
document.getElementById('end-game').addEventListener('click', (e) =>{
    val = score();
    alert('Thank you for giving a '+ val + 'score!');
})