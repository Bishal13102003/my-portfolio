<script>
  // Initialize EmailJS with your User ID
  (function() {
    try {
      emailjs.init("C9teIQBydN5xneYZl"); // Your EmailJS Public Key
      console.log("EmailJS initialized successfully");
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
      alert("Failed to initialize email service. Please try again later.");
    }
  })();

  // Function to send email
  function sendEmail() {
    // Get form values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form inputs
    if (!fullName || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Generate timestamp in IST (Indian Standard Time)
    const now = new Date();
    const time = now.toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata'
    });

    // Template parameters matching the EmailJS template
    const templateParams = {
      name: fullName, // Matches {{name}} in the template
      email: email,   // Matches {{email}} in the template
      message: message, // Matches {{message}} in the template
      time: time,     // Matches {{time}} in the template
      to_email: 'bishalpaul151@gmail.com'
    };

    // Send email using EmailJS
    emailjs.send('service_fvqzzvt', 'template_85gxz2j', templateParams)
      .then(function(response) {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Message sent successfully!');
        // Reset form fields
        document.getElementById('full-name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      }, function(error) {
        console.error('Failed to send email:', error);
        alert('Failed to send message: ' + JSON.stringify(error));
      });
  }

  // Existing Navigation Script
  const navLinks = document.querySelectorAll('.top-nav a');
  const sections = document.querySelectorAll('.right-panel section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      link.classList.add('active');
      const sectionId = link.getAttribute('data-section');
      document.getElementById(sectionId).classList.add('active');
    });
  });
</script>