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
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
