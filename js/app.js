/**
 * Main Application Entry Point
 */

import { loginWithEmail, loginWithGoogle, logout, onAuthChange } from './auth.js';
import { loadContent } from './content.js';

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const documentContainer = document.getElementById('document-container');
const loginBtn = document.getElementById('login-btn');
const googleLoginBtn = document.getElementById('google-login-btn');
const logoutBtn = document.getElementById('logout-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('login-error');
const userEmail = document.getElementById('user-email');

// UI State Management
function showDocument(user) {
    loginScreen.style.display = 'none';
    documentContainer.style.display = 'block';
    userEmail.textContent = user.email;
    loadContent();
}

function showLogin() {
    loginScreen.style.display = 'flex';
    documentContainer.style.display = 'none';
    loginError.textContent = '';
    emailInput.value = '';
    passwordInput.value = '';
}

function setLoading(isLoading) {
    loginBtn.disabled = isLoading;
    googleLoginBtn.disabled = isLoading;
    loginBtn.querySelector('.btn-text').style.display = isLoading ? 'none' : 'inline';
    loginBtn.querySelector('.btn-loader').style.display = isLoading ? 'inline' : 'none';
}

// Event Handlers
loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        loginError.textContent = 'Masukkan email dan password.';
        return;
    }

    setLoading(true);
    loginError.textContent = '';

    const result = await loginWithEmail(email, password);

    setLoading(false);
    if (!result.success) {
        loginError.textContent = result.error;
    }
});

googleLoginBtn.addEventListener('click', async () => {
    setLoading(true);
    loginError.textContent = '';

    const result = await loginWithGoogle();

    setLoading(false);
    if (!result.success) {
        loginError.textContent = result.error;
    }
});

logoutBtn.addEventListener('click', async () => {
    await logout();
});

// Handle Enter key on password field
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        loginBtn.click();
    }
});

// Auth State Observer
onAuthChange((user) => {
    if (user) {
        showDocument(user);
    } else {
        showLogin();
    }
});
