// IE Detection

// 10 or older  
document.all;

// 9  or older
document.all && !window.atob;

// 8  or older
document.all && !document.addEventListener;

// 7  or older
document.all && !document.querySelector;

// 6  or older
document.all && !window.XMLHttpRequest;

// 5.x
document.all && !document.compatMode;
