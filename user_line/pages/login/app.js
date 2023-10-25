import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
    const firebaseConfig = {
        apiKey: "AIzaSyCyrNBpSnag4W2D8y5qKA_miHZ3vsyE784",
        authDomain: "authentication-app-79f47.firebaseapp.com",
        databaseURL: "https://authentication-app-79f47-default-rtdb.firebaseio.com",
        projectId: "authentication-app-79f47",
        storageBucket: "authentication-app-79f47.appspot.com",
        messagingSenderId: "155210703093",
        appId: "1:155210703093:web:53d22d76c4689a7a7665bc"
    };
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    
    // ฟังก์ชันในการสร้างบัญชีผู้ใช้
    // signUp.addEventListener('click', (e) => {

    //     var email = document.getElementById('email').value;
    //     var password = document.getElementById('password').value;
    //     // var username = document.getElementById('username').value;
    //     console.log(password);
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed up 
    //         const user = userCredential.user;
    //         // console.log('user created');
    //         // ...
        
    //         // save sign up datails in realtime database บันทึกข้อมูลในการลงทะเบียนฐานข้อมูลเรียลไทม์
    //         set(ref(database, 'users/' + user.uid),{
    //             email: email
    //         })
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
            
    //         // console.log(errorMessage);
    //     });
    // });

    // ฟังก์ชันในส่วนการ login
    // login.addEventListener('click', (e) => {
    //     var email = document.getElementById('email').value;
    //     var password = document.getElementById('password').value;
        
    //         signInWithEmailAndPassword(auth, email, password)
    //             .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             // ...

    //             // update user login details in realtime database อัปเดตรายละเอียดการเข้าสู่ระบบของผู้ใช้ในฐานข้อมูลเรียลไทม์
                
    //                 set(ref(database, 'users/' + user.uid), {
    //                     email: email
    //                 });
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //         });
    // });

// ฟังก์ชันในส่วนการ logout
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
    logout.addEventListener('click', (e) => {
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    });




         