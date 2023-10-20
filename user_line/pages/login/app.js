import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
        const firebaseConfig = {
            apiKey: "AIzaSyCobEdZH6BcltorXTDs9u1PB0cfSTGBMZ0",
            authDomain: "fir-company-5f694.firebaseapp.com",
            projectId: "fir-company-5f694",
            storageBucket: "fir-company-5f694.appspot.com",
            messagingSenderId: "1067848697539",
            appId: "1:1067848697539:web:bf5b5c0e22430635ab4476",
            measurementId: "G-HGN524L90P"
        };

        const app = initializeApp(firebaseConfig);
        const form = document.getElementById("regetterform");
const formarea = document.getElementById("form-area");
console.log(form);

        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            console.log(form.email.value)
            console.log(form.password.value)
        })

