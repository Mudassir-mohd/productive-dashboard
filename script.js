let timer;
let timeLeft = 1500; // 25 minutes in seconds

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    if (taskInput.value) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskInput.value;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timer);
            alert('Time is up! Take a break.');
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 1500;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer-display').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}