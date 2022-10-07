const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_x09cip8';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviando...';
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mensaje Enviado',
            showConfirmButton: false,
            timer: 1500
          }) ;
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  });