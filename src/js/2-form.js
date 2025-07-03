const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.js-form');
const email = form.querySelector('[name="email"]');
const textarea = form.querySelector('[name="message"]');

getSavedInput();

form.addEventListener('input', onTextInput);

function onTextInput(event) {
  const emailValue = email.value;
  const textareaValue = textarea.value;
  formData = {
    email: `${emailValue}`,
    message: `${textareaValue}`,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function getSavedInput() {
  const savedInput = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!savedInput) {
    return;
  }
  const parsedValue = JSON.parse(savedInput);
  email.value = parsedValue.email;
  textarea.value = parsedValue.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value === '' || textarea.value === '') {
    return alert('Fill please all fields');
  }
  formData = {
    email: email.value,
    message: textarea.value,
  };
  console.log(formData);
  form.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
});
