

function validateForm() {
    var x = document.forms["contactForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function validateForm() {
    var x = document.forms["contactForm"]["femail"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
}

function validateForm() {
    var x = document.forms["contactForm"]["fphoneNumber"].value;
    if (x == "") {
        alert("Phone number must be filled out");
        return false;
    }
}

