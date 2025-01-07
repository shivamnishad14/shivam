
  console.log("Contact us form init");
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwo0DkTP3dtvHgr5_2Iw4aCGG2bG50brR2RxeiMW5Gs1hBTjZmZ8wvoFkuE00pQZpvE/exec';

  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };
  
    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        alert('Message sent successfully!');
        console.log('Response:', data);
      })
      .catch((error) => {
        alert('Failed to send message. Check console for details.');
        console.error('Error:', error);
      });
  });
  
  

  console.log("Contact us form end");
