/**
 * Main Application - SPA Version
 */

import { loginWithEmail, loginWithGoogle, logout, onAuthChange } from './auth.js';
import { loadContent, navigateTo } from './content.js';

// DOM Elements
const loginModal = document.getElementById('login-modal');
const adminHeader = document.getElementById('admin-header');
const loginBtn = document.getElementById('login-btn');
const googleLoginBtn = document.getElementById('google-login-btn');
const logoutBtn = document.getElementById('logout-btn');
const closeModalBtn = document.getElementById('close-modal');
const adminTrigger = document.getElementById('admin-login-trigger');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('login-error');
const userEmail = document.getElementById('user-email');

// Initialize - check hash for initial page
function init() {
    const hash = window.location.hash.slice(1) || 'rekrutmen';
    loadContent(hash);
}

// Modal Functions
function showModal() {
    loginModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    loginModal.style.display = 'none';
    document.body.style.overflow = '';
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

function enableAdminMode(user) {
    adminHeader.style.display = 'flex';
    userEmail.textContent = user.email;
    adminTrigger.style.display = 'none';
    hideModal();
    document.body.classList.add('admin-mode');
}

function disableAdminMode() {
    adminHeader.style.display = 'none';
    adminTrigger.style.display = 'inline-block';
    document.body.classList.remove('admin-mode');
}

// Event Listeners
adminTrigger.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);
loginModal.querySelector('.modal-backdrop').addEventListener('click', hideModal);

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
    if (!result.success) loginError.textContent = result.error;
});

googleLoginBtn.addEventListener('click', async () => {
    setLoading(true);
    loginError.textContent = '';
    const result = await loginWithGoogle();
    setLoading(false);
    if (!result.success) loginError.textContent = result.error;
});

logoutBtn.addEventListener('click', () => logout());
passwordInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') loginBtn.click(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && loginModal.style.display === 'flex') hideModal(); });

// Auth State Observer
onAuthChange((user) => {
    if (user) enableAdminMode(user);
    else disableAdminMode();
});

// Initialize app
init();
