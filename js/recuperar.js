// Inicializa EmailJS con tu Public Key
emailjs.init("uXU3m3Lj_tXY9kCSh");

document.getElementById("recuperarForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const token = Math.floor(100000 + Math.random() * 900000); // 6 dígitos aleatorios

    if (!name || !email || !email.includes("@")) {
        Swal.fire({
            icon: "warning",
            title: "Campos inválidos",
            text: "Por favor completa tu nombre y un correo válido.",
        });
        return;
    }

    // Asigna el token al campo oculto (opcional)
    document.getElementById("token").value = token;

    const templateParams = {
        name: name,
        email: email,
        token: token
    };

    emailjs.send("service_2r3biga", "template_q1vlz83", templateParams)
        .then(function (response) {
            Swal.fire({
                icon: "success",
                title: "Correo enviado 📬",
                text: "El código de recuperación ha sido enviado a tu correo.",
            });
            console.log("Éxito:", response.status, response.text);
        }, function (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo enviar el correo. Intenta más tarde.",
            });
            console.error("Error:", error);
        });
});