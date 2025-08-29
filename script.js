let heartCount = 100; 
let coinCount =[100]; 
let callHistory = [];

document.addEventListener("DOMContentLoaded", () => {
    updateCounts();
   
    document.querySelector('.clear-btn').addEventListener('click', clearHistory);
});

function increaseHeartCount() {
    heartCount++;
    updateCounts();
}

function updateCounts() {
    document.querySelector('.heart-count').innerText = heartCount;
    document.querySelector('.coin-count').innerText = `${coinCount}`;
}
// Adding to Call History
function addToCallHistory(serviceName, serviceNumber) {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    callHistory.push({ serviceName, serviceNumber, time: currentTime });
    renderCallHistory();
}

// Render Call History
function renderCallHistory() {
    const historyList = document.querySelector('.history-list');
    historyList.innerHTML = ''; 
    callHistory.forEach(item => {
        const article = document.createElement('article');
        article.className = 'history-item';
        article.innerHTML = `
            <div class="item-info">
                <div class="item-title">${item.serviceName}</div>
                <div class="item-number">${item.serviceNumber}</div>
            </div>
            <time class="item-time">${item.time}</time>
        `;
        historyList.appendChild(article);
    });
}

// Clear History Functionality
function clearHistory() {
    callHistory = [];
    renderCallHistory();
}

// Handle Copy Button Function 
function copyToClipboard(number) {
    navigator.clipboard.writeText(number).then(() => {
        alert(`Copied ${number} to clipboard`);
    });
}

// Attach event listeners to heart icons and call buttons
document.querySelectorAll('.icon-heart').forEach(icon => {
    icon.addEventListener('click', increaseHeartCount);
});


document.querySelectorAll('.flex-grow a[href^="tel:"]').forEach(button => {
    const serviceName = button.previousElementSibling.previousElementSibling.innerText;
    const serviceNumber = button.getAttribute('href').replace('tel:', '');
    
    button.addEventListener('click', (e) => {
        e.preventDefault(); 
        makeCall(serviceName, serviceNumber);
    });
});


function handleCallButtonClick(serviceName, serviceNumber) {
    const coinCountElem = document.querySelector('.coin-count');
    if (!coinCountElem) {
      alert('Coin count element not found!');
      return;
    }
  
    let coins = parseInt(coinCountElem.textContent, 10);
    if (isNaN(coins)) {
      alert('Invalid coin count!');
      return;
    }
  
    if (coins < 20) {
      alert('Insufficient coins to make a call. You need at least 20 coins.');
      return;
    }
  
    // Deduct 20 coins
    coins -= 20;
    coinCountElem.textContent = coins;
  
    // Show alert with service name and number
    alert(`Calling ${serviceName} at number ${serviceNumber}.\n20 coins have been deducted.`);
  }
  