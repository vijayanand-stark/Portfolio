document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ " + data.message);
        form.reset();
      } else {
        alert("❌ Something went wrong. Try again later!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Unable to send message. Server may be offline.");
    }
  });
});
