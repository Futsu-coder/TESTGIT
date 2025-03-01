const toggleConfirmPasswordButton = document.getElementById('toggleConfirmPassword');
const confirmPasswordInput = document.getElementById('confirm-password');



toggleConfirmPasswordButton.addEventListener('click', () => {
    if (confirmPasswordInput.type === 'password') {
      confirmPasswordInput.type = 'text';
      toggleConfirmPasswordButton.innerHTML = '<i class="fa fa-eye"></i>';
    } else {
      confirmPasswordInput.type = 'password';
      toggleConfirmPasswordButton.innerHTML = '<i class="fa fa-eye-slash"></i>';
    }
  });