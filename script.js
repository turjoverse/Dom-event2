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

// Call Button Functionality
function makeCall(serviceName, serviceNumber) {
    if (coinCount < 20) {
        alert("Not enough coins to make this call!");
        return;
    }
    alert(`Calling ${serviceName} at ${serviceNumber}`);
    coinCount -= 20; 
    updateCounts();
    addToCallHistory(serviceName, serviceNumber);
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

// Handle Copy Button Function (Example)
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
