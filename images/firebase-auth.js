import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBrtUADtAu6HcniJlrll41hswuj9gnpKWg",
    authDomain: "home-foods-9f024.firebaseapp.com",
    projectId: "home-foods-9f024",
    storageBucket: "home-foods-9f024.appspot.com",
    messagingSenderId: "403437439856",
    appId: "1:403437439856:web:a95a64fc4242552438ddb5",
    measurementId: "G-MGPG1DRHC4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Function
window.signup = function () {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Signup successful!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
        });
}

// Login Function
window.login = function () {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Login successful!";
            setTimeout(() => {
                window.location.href = "adminmenu.html";  // Redirect to dashboard
            }, 1000); // Delay for 1 second before redirecting
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
        });
};