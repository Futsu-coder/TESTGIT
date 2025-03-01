const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');



togglePasswordButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.innerHTML = '<i class="fa fa-eye"></i>';
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.innerHTML = '<i class="fa fa-eye-slash"></i>';
  } 
});
