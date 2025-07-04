const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.js-form');
const email = form.elements.email;
const textarea = form.elements.message;

getSavedInput();

form.addEventListener('input', onTextInput);

function onTextInput(event) {
  formData = {
        email: email.value,
        message: textarea.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function getSavedInput() {
  const savedInput = localStorage.getItem(localStorageKey);
  if (!savedInput) {
    return;
  }
  const getFormData = JSON.parse(savedInput);
  email.value = getFormData.email;
  textarea.value = getFormData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value.trim() === '' || textarea.value.trim() === '') {
    return alert('Fill please all fields');
  };
  formData = {
    email: email.value.trim(),
    message: textarea.value.trim(),
  };
  console.log(formData);
  form.reset();
  localStorage.removeItem(localStorageKey);
});
