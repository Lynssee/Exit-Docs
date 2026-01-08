/**
 * Authentication Module
 */

import { auth } from './firebase-config.js';
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const googleProvider = new GoogleAuthProvider();

export async function loginWithEmail(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, error: getErrorMessage(error.code) };
    }
}

export async function loginWithGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return { success: true, user: result.user };
    } catch (error) {
        return { success: false, error: getErrorMessage(error.code) };
    }
}

export async function logout() {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export function onAuthChange(callback) {
    return onAuthStateChanged(auth, callback);
}

export function getCurrentUser() {
    return auth.currentUser;
}

function getErrorMessage(errorCode) {
    const messages = {
        'auth/invalid-email': 'Format email tidak valid.',
        'auth/user-not-found': 'Email tidak terdaftar.',
        'auth/wrong-password': 'Password salah.',
        'auth/invalid-credential': 'Email atau password salah.',
        'auth/popup-closed-by-user': 'Login dibatalkan.',
        'auth/network-request-failed': 'Koneksi gagal.',
        'auth/too-many-requests': 'Terlalu banyak percobaan.'
    };
    return messages[errorCode] || 'Terjadi kesalahan.';
}
