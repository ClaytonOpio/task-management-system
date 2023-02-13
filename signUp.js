import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa2oC3708LksZwxIAdBfw-3KcprsEzKPA",
  authDomain: "plp-cohort-2-ec02f.firebaseapp.com",
  projectId: "plp-cohort-2-ec02f",
  storageBucket: "plp-cohort-2-ec02f.appspot.com",
  messagingSenderId: "952137909542",
  appId: "1:952137909542:web:88cc8882f6b718cb622de7",
  measurementId: "G-9VT7PKMNYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


const main = document.getElementById("main");
const createAcc = document.getElementById("create-acct");

const emailInput = documet.getElementById("email");
const passwordInput = documet.getElementById("password");
const submitBtn = documet.getElementById("submit");

const signUpEmailIn = document.getElementById("email-signup");
const signUpPasswordIn = document.getElementById("password-signup");
const ConfirmSignUpEmailIn = document.getElementById("confirm-email-signup");
const ConfirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createAccBtn = document.getElementById("create-acct-btn");




const signUpBtn = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");


var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createAccBtn.addEventListener("click", () => {
  var isVerified = true;

  signupEmail = signUpEmailIn.value;
  confirmSignupEmail = ConfirmSignUpEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signUpPasswordIn.value;
  confirmSignUpPassword = ConfirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then(() => {
        window.alert("Success! Account Created");
        window.location = "./createTask.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);

        // window.alert("Error Occurred. Try Again")
      });
  }
});

submitBtn.addEventListener("click", () => {
  email = emailInput.value;
  password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password).then(() => {
    window.alert("Success! Welcome");
    window.location("./createTask.html");
  }).catch((error) => {
    const errorMessage = error;
    window.alert(errorMessage);

    // window.alert("Error Occurred. Try Again")
  });
});

signUpBtn.addEventListener("click", () => {
  main.style.display = "none";
  createAcc.style.display = "block";
})

returnBtn.addEventListener("click", () => {
  main.style.display = "block";
  createAcc.style.display = "none";
})

