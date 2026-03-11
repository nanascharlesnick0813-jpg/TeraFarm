function sendEmail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_jcu0uwp", "template_5eemltz", parms).then(alert("Email sent successfully! "));
}