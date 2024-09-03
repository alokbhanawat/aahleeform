//alerts
// Get the fieldsets
const fieldsets = document.querySelectorAll('fieldset');

// Get the next buttons
const nextButtons = document.querySelectorAll('.next');

// Get the previous buttons
const prevButtons = document.querySelectorAll('.previous');

// Set the current fieldset index
let currentFieldsetIndex = 0;

// Add event listeners to the next buttons
nextButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Check if all required fields have a value
    const requiredFields = [
      { name: 'name', type: 'input' },
      { name: 'age', type: 'input' },
      { name: 'gender', type: 'select' },
      { name: 'mobile', type: 'input' },
      { name: 'address1', type: 'input' },
      { name: 'address2', type: 'input' },
      { name: 'pincode', type: 'input' },
      { name: 'city', type: 'input' },
      { name: 'state', type: 'input' },
      { name: 'country', type: 'input' }
    ];

    let allFieldsFilled = true;
    requiredFields.forEach((field) => {
      let fieldValue;
      if (field.type === 'input') {
        fieldValue = document.querySelector(`input[name="${field.name}"]`).value.trim();
      } else if (field.type === 'select') {
        fieldValue = document.querySelector(`select[name="${field.name}"]`).value;
      }
      if (fieldValue === '' || fieldValue === 'Select Gender') {
        alert(`Please fill in your ${field.name}.`);
        allFieldsFilled = false;
      }
    });

    if (!allFieldsFilled) {
      return;
    }
//Progressbar
    // Hide the current fieldset
    fieldsets[currentFieldsetIndex].style.display = 'none';

    // Show the next fieldset
    currentFieldsetIndex++;
    fieldsets[currentFieldsetIndex].style.display = 'block';

    // Update the progress bar
    const progressBar = document.querySelector('.progress-bar');
    if (index === 0) {
      progressBar.style.width = '50%';
    } else if (index === 1) {
      progressBar.style.width = '100%';
    }

    // Update the active progress bar item
    const progressItems = document.querySelectorAll('#progressbar li');
    progressItems.forEach((item, index) => {
      if (index === currentFieldsetIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
});


// Add event listeners to the previous buttons
prevButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Hide the current fieldset
    fieldsets[currentFieldsetIndex].style.display = 'none';

    // Show the previous fieldset
    currentFieldsetIndex--;
    fieldsets[currentFieldsetIndex].style.display = 'block';

    // Update the progress bar
    const progressBar = document.querySelector('.progress-bar');
    if (currentFieldsetIndex === 0) {
      progressBar.style.width = '0%';
    } else if (currentFieldsetIndex === 1) {
      progressBar.style.width = '40%';
    }
    // Update the active progress bar item
    const progressItems = document.querySelectorAll('#progressbar li');
    progressItems.forEach((item, index) => {
      if (index === currentFieldsetIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
});
document.getElementsByName('eventTimings').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      document.querySelectorAll('input[name="eventTimings"]:checked').forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

// Get the progress bar and the submit button
// const progresssBar = document.querySelector('.progress');
// const submitButton = document.querySelector('input[type="button"][value="Submit"]');

// // Add an event listener to the submit button
// submitButton.addEventListener('click', () => {
//   // Update the progress bar width to 100%
//   const progressBar = document.querySelector('.progress-bar');
//   progressBar.style.width = '100%';

//   // Remove the progress bar
//   progressBar.style.display = 'none';
//   progresssBar.style.display = 'none';
// });

// const scriptURL = 'https://script.google.com/macros/s/AKfycbyj6EoY95yrMe-qRGtmFUpBfpatBbhksiKdE7uJaIVXLyZ_YdcNMFoqCZxskfeoQaXFzA/exec'

// const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! your form is submitted successfully." ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })

// attendee Query [total 6]
// Limit the number of attendees
// const attendeeInputt = document.querySelector('input[name="attendees"]');

// attendeeInputt.addEventListener('input', () => {
//   const maxValue = 6;
//   const currentValue = parseInt(attendeeInputt.value, 10);

//   if (currentValue > maxValue) {
//     attendeeInputt.value = '';
//     alert("You can't add more than 6 attendees.");
//   }
// });

// const attendeeInput = document.querySelector('input[name="attendees"]');
// const memberFields = document.querySelectorAll('.roww > div');
// const nextButton = document.querySelector('input[name="next"]');

// // Set the min attribute to 0 to prevent negative values
// attendeeInput.min = 0;

// nextButton.addEventListener('click', () => {
//   const numAttendees = parseInt(attendeeInput.value) || 1; // default to 1 if no value is inputted
//   memberFields.forEach((field, index) => {
//     if (index < numAttendees && index < 6) { // only require data for the first 6 forms
//       field.style.display = 'block';
//     } else {
//       field.style.display = 'none';
//     }
//   });
// });

// attendeeInput.addEventListener('input', () => {
//   const numAttendees = parseInt(attendeeInput.value) || 1; // default to 1 if no value is inputted
//   memberFields.forEach((field, index) => {
//     if (index < numAttendees && index < 6) { // only require data for the first 6 forms
//       field.style.display = 'block';
//     } else {
//       field.style.display = 'none';
//     }
//   });
// });

// Location Query 

const location1Count = 0;
const location2Count = 0;

document.addEventListener('DOMContentLoaded', () => {
  const eventLocationSelect = document.querySelector('select[name="eventLocation"]');
  const form = document.querySelector('form[name="form-data"]');

  eventLocationSelect.addEventListener('change', () => {
    const selectedLocation = eventLocationSelect.value;
    if (selectedLocation === 'Location 1') {
      location1Count++;
      if (location1Count >= 400) {
        alert('Event Sold Out for Location 1');
        form.disabled = true;
      }
    } else if (selectedLocation === 'Location 2') {
      location2Count++;
      if (location2Count >= 400) {
        alert('Event Sold Out for Location 2');
        form.disabled = true;
      }
    }
  });
});



// Submit Query with redirect to form page 
let formSubmitted = false;

document.getElementById('msform').addEventListener('click', () => {
  const form = document.querySelector('form[name="form-data"]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Form submission code here
    // ...
    if (!formSubmitted) {
      alert('Form submitted successfully!');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 100); // redirect after 100ms
      formSubmitted = true;
    }
  });
});