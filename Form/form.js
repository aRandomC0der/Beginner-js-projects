const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (ev) => {
  let messages = '';
  if (email.value !== '' || email.value != null) {
    messages = alert('Email Invalid!');
  };

  if (password.value.length < 8) {
    messages = alert('Password Invalid!')
  }

  if (messages !== '') {
    ev.preventDefault();
  }
})

