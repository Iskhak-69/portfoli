document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.getElementById('contactButton').addEventListener('click', function() {
    alert('This will take you to the contact page!');
    window.location.href = 'html/contacts.html'; 
});
