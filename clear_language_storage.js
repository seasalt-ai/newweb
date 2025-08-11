// Clear localStorage in browser console to reset language preferences
console.log("Before clearing:");
console.log("localStorage.getItem('i18nextLng'):", localStorage.getItem('i18nextLng'));
console.log("document.cookie:", document.cookie);

// Clear i18n localStorage
localStorage.removeItem('i18nextLng');

// Clear i18n cookies
document.cookie = 'i18nextLng=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
document.cookie = 'i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

console.log("After clearing:");
console.log("localStorage.getItem('i18nextLng'):", localStorage.getItem('i18nextLng'));
console.log("Page should be refreshed now...");

// Refresh the page to load clean
window.location.reload();
