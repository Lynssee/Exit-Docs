/**
 * Firebase Configuration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a new project or select existing one
 * 3. Go to Project Settings > General > Your apps
 * 4. Click "Add app" and select Web (</>)
 * 5. Register your app and copy the config below
 * 6. Enable Authentication:
 *    - Go to Authentication > Sign-in method
 *    - Enable "Email/Password" and "Google"
 * 7. Add your Cloudflare domain to authorized domains:
 *    - Go to Authentication > Settings > Authorized domains
 *    - Add your *.pages.dev domain
 */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// TODO: Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlkljif980XWENyAeTUGN40wtw1M0HRxw",
    authDomain: "exit-dea8e.firebaseapp.com",
    projectId: "exit-dea8e",
    storageBucket: "exit-dea8e.firebasestorage.app",
    messagingSenderId: "532810358958",
    appId: "532810358958:web:d9c95a828b990bbb7c8d3f",
    measurementId: "G-LFFFFGGG0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
