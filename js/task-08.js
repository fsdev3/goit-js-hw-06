const formEl = document.querySelector('[class="login-form"]');
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All fields have to be filled!');
    return;
  }
  const objData = {
    email,
    password,
  };
  console.log(objData);
  formEl.reset();
}

//    (!(email && password))
