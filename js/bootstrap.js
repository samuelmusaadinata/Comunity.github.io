const countdownDisplay = document.getElementById('time');
const userInput = document.getElementById('user-input');
const openingTime = new Date('2023-03-01T10:00:00'); // set the opening time
const closingTime = new Date('2023-03-01T11:00:00'); // set the closing time

let countdownInterval;

function countdown() {
  const now = new Date();
  const timeDiff = closingTime - now;

  if (timeDiff <= 0) {
    // close the site
    window.close();
  } else {
    const minutes = Math.floor(timeDiff / 60000);
    const seconds = Math.floor((timeDiff % 60000) / 1000);

    countdownDisplay.textContent = `${minutes} minutes and ${seconds} seconds`;
  }
}

countdownInterval = setInterval(countdown, 1000);

// add event listener to input field
userInput.addEventListener('input', (e) => {
  if (e.target.value !== '') {
    // close the site after input is entered
    window.close();
  }
});