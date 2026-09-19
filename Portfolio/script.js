function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function submitForm() {
    alert("Message sent successfully!");
    return false;
}