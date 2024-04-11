document.addEventListener('DOMContentLoaded', function() {
    const enquiryForm = document.getElementById('enquiry-form');
    
    enquiryForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        // Basic validation example
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const message = document.getElementById('message').value;
        
        if(name && email && contact && message) {
            // If all fields are filled, process the form here (e.g., send it to a server)
            console.log("Form submitted with:", { name, email, contact, message });
            // Show a success message or redirect to a thank you page
            alert("Thank you for your enquiry. We will be in touch soon!");
            
            // Reset the form after submission or redirect
            enquiryForm.reset();
        } else {
            // If some fields are missing, show an error message
            alert("Please fill out all fields.");
        }
    });
});
