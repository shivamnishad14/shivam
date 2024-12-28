
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const jsonData = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(this.action, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonData),
        });

        const result = await response.json();
        alert(result.message || "Form submitted successfully!");
    } catch (error) {
        console.error("Error:", error);
        alert("There was an error submitting the form. Please try again.");
    }
});