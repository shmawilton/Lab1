let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light');
}else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot')

for (let i = 0;themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log("Option clicked", mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode === 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }
    if (mode === 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }
    if (mode === 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }
    if (mode === 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme',  mode);
}

function myFunction() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function storeDetails() {
    // Check if the browser supports local storage
    if (window.localStorage) {
        // Get the form element
        const form = document.getElementById('contact-form');

        // Store each field's value in local storage
        localStorage.setItem('name', form.name.value);
        alert('Name: ' + form.name.value);
        localStorage.setItem('subject', form.subject.value);
        alert('Subject: ' + form.subject.value);
        localStorage.setItem('email', form.emai.value); // Note: The name attribute for email is misspelled as 'emai'
        alert('Email: ' + form.emai.value);
        localStorage.setItem('message', form.message.value);

        alert('Details stored successfully!');
    } else {
        alert('Sorry, your browser does not support local storage.');
    }
}

function displayEmailDetails() {
    // Check if the browser supports local storage
    if (window.localStorage) {
        // Retrieve the email details from local storage
        const emailDetails = localStorage.getItem('email'); // Note: The name attribute for email is misspelled as 'emai'
        
        if (emailDetails) {
            alert('Email: ' + emailDetails);
        } else {
            alert('No email details found in local storage.');
        }
    } else {
        alert('Sorry, your browser does not support local storage.');
    }
}
