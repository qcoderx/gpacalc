// Update these functions in your existing JavaScript:

function saveData() {
    const userId = document.getElementById('userId').value.trim();
    if (!userId) {
        alert('Please enter a user ID to save your data');
        return;
    }
    
    fetch('/API/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, semesters }),
    })
    .then(/* ... existing code ... */);
}

function loadData() {
    const userId = document.getElementById('userId').value.trim();
    if (!userId) {
        alert('Please enter a user ID to load your data');
        return;
    }
    
    fetch(`/API/load?userId=${encodeURIComponent(userId)}`)
    .then(/* ... existing code ... */);
}