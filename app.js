// Import the Firebase SDK functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAVspQVta-pG0l1JULlCCF0Vuvly8y9pty",
  authDomain: "digital-awareness-app.firebaseapp.com",
  projectId: "digital-awareness-app",
  storageBucket: "digital-awareness-app.appspot.com",
  messagingSenderId: "177808104894",
  appId: "1:177808104894:web:420258068af4f42d0de47ef",
  measurementId: "G-LRS9Y95FQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const feedback = document.getElementById('feedback').value;
  const responseMessage = document.getElementById('responseMessage');

  try {
    await addDoc(collection(db, "feedback"), {
      name,
      feedback,
      timestamp: new Date()
    });

    responseMessage.textContent = "Thank you! Your feedback was submitted.";
  } catch (error) {
    console.error("Error adding document: ", error);
    responseMessage.textContent = "Something went wrong. Please try again.";
  }

  document.getElementById('feedbackForm').reset();
});
