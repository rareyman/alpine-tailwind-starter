// console.log('Hello World!')

/* dark mode
============================================================================= */
var darkMode
// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'
// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'
// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')

// toggle button
let htmlElement = document.querySelector('html')
// let btnDarkToggle = document.querySelector('#btnDarkToggle')
// let btnDarkClear = document.querySelector('#btnDarkClear')

window.onload = () => {
	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	// first, check localstorage
	if ('theme' in localStorage) {
		if (localStorage.theme === 'dark') {
			darkMode = true
			localStorage.theme = 'dark'
			htmlElement.classList.add('dark')
			document.querySelector('.switchDark').checked = true
		} else {
			darkMode = false
			localStorage.theme = 'light'
			htmlElement.classList.remove('dark')
			document.querySelector('.switchDark').checked = false
		}
	}
	// next, check device preference
	else {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			darkMode = true
			localStorage.theme = 'dark'
			htmlElement.classList.add('dark')
			document.querySelector('.switchDark').checked = true
		} else {
			darkMode = false
			localStorage.theme = 'light'
			htmlElement.classList.remove('dark')
			document.querySelector('.switchDark').checked = false
		}
	}
	console.log(`Dark Mode: ${darkMode}`)
}

// btnDarkToggle.onclick = function () {
// 	// console.log('clicked!')
// 	// console.log(btnToggle.classList)
// 	if (darkMode) {
// 		htmlElement.classList.remove('dark')
// 		darkMode = false
// 		localStorage.theme = 'light'
// 	} else {
// 		htmlElement.classList.add('dark')
// 		darkMode = true
// 		localStorage.theme = 'dark'
// 	}
// 	console.log(`Dark Mode: ${darkMode}`)
// }

// eslint-disable-next-line no-unused-vars
function switchDarkToggle(elem) {
	if (elem.checked) {
		darkMode = true
		localStorage.theme = 'dark'
		document.querySelector('html').classList.add('dark')
	} else {
		darkMode = false
		localStorage.theme = 'light'
		document.querySelector('html').classList.remove('dark')
	}
}
