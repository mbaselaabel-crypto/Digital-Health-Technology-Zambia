// Collapsible toggle functionality
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Toggle active state for plus/minus indicator
    btn.classList.toggle("active");

    // Toggle content visibility
    const content = btn.nextElementSibling;
    content.classList.toggle("show");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Collapsible buttons (your existing code stays here)

  // Inquiry form handling
  const inquiryForm = document.getElementById("equipment-inquiry");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", function(e) {
      e.preventDefault(); // stop default reload

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;

      // For now, just show a confirmation popup
      alert(`Thank you, ${name}! Your inquiry has been submitted.\n\nWe will contact you at ${email}.`);

      // Later: send data to backend or service like Formspree
      inquiryForm.reset();
    });
  }
});
