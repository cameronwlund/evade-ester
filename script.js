// Door Closed Images
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// Door Opened Images
let botDoorPath = "https://i.imgur.com/NwvEk9O.png";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
console.log(botDoorPath);

// GAME FUNCTIONALITY

let numClosedDoors = 3;
let choreDoor = Math.floor(Math.random() * numClosedDoors);
let openDoor1 = '';
let openDoor2 = '';
let openDoor3 = '';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let startButton = document.getElementById('start');
let startRow = document.getElementById('start-row');
let streakBox = document.getElementById('streak-box');
let roundNumber = document.getElementById('round-number');
let streakNumber = document.getElementById('streak-number');
let currentlyPlaying = true;
let roundNumberCounter = 1;
let streakNumberCounter = 0;
let highestStreak = 0;


const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startRow.style.backgroundColor = '#fff';
  startRow.style.color = '#8c52ff';
  startRow.style.borderColor = '#8c52ff';
  streakBox.style.backgroundColor = '#fff';
  streakBox.style.color = '#8c52ff';
  streakBox.style.borderColor = '#8c52ff';
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  choreDoor = Math.floor(Math.random() * numClosedDoors);
  randomChoreDoorGenerator();
}

doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying === true) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying === true) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying === true) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
}

const randomChoreDoorGenerator = () => {
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
}

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

const gameOver = (status) => {
    if (status === 'win') {
      startButton.innerHTML = 'You Win!<br>Play again?';
      startRow.style.backgroundColor = '#89E894';
      startRow.style.color = '#3E6943';
      startRow.style.borderColor = '#3E6943';
      roundNumberCounter++;
      streakNumberCounter++;
      roundNumber.innerHTML = roundNumberCounter;
      if (streakNumberCounter > highestStreak) {
        streakNumber.innerHTML = streakNumberCounter;;
      }
      if (streakNumberCounter > highestStreak) {
        highestStreak = streakNumberCounter;
        streakNumber.innerHTML = highestStreak;
        streakBox.style.backgroundColor = '#89E894';
        streakBox.style.color = '#3E6943';
        streakBox.style.borderColor = '#3E6943';
      }
    } else {
      startButton.innerHTML = 'Game over!<br>Play again?';
      startRow.style.backgroundColor = '#F5605B';
      startRow.style.color = '#6B2A28';
      startRow.style.borderColor = '#6B2A28';
      roundNumberCounter = 1;
      roundNumber.innerHTML = roundNumberCounter;
      streakNumberCounter = 0;
    }
    currentlyPlaying = false;
}

const playDoor = (door) => {
  numClosedDoors--;
  if (isBot(door)) {
    gameOver();
  } else if (numClosedDoors === 1) {
    gameOver('win');
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
  startRound();
  }
}

startRound();

// EVENTS

/*

let purpleHover = () => {
  startRow.style.backgroundColor = '#8c52ff';
  startRow.style.color = '#fff';
}

let whiteAway = () => {
  startRow.style.backgroundColor = '#fff';
  startRow.style.color = '#8c52ff';
}

let heartbeat1 = () => {
  doorImage1.className = "heartBeat animated";
}

let heartbeatOff1 = () => {
  doorImage1.className = "door-frame";
  doorImage1.classList.remove("heartBeat");
  doorImage1.classList.remove("animated");
}

let heartbeat2 = () => {
  doorImage2.className = "heartBeat animated";
}

let heartbeatOff2 = () => {
  doorImage2.className = "door-frame";
  doorImage2.classList.remove("heartBeat");
  doorImage2.classList.remove("animated");
}

let heartbeat3 = () => {
  doorImage3.className = "heartBeat animated";
}
let heartbeatOff3 = () => {
  doorImage3.className = "door-frame";
  doorImage3.classList.remove("heartBeat");
  doorImage3.classList.remove("animated");
}

startRow.addEventListener('mouseover', purpleHover);
startRow.addEventListener('mouseout', whiteAway);
doorImage1.addEventListener('mouseover', heartbeat1);
doorImage1.addEventListener('mouseout', heartbeatOff1);
doorImage2.addEventListener('mouseover', heartbeat2);
doorImage2.addEventListener('mouseout', heartbeatOff2);
doorImage3.addEventListener('mouseover', heartbeat3);
doorImage3.addEventListener('mouseout', heartbeatOff3

*/
