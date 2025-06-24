// script.js

document.getElementById("testerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const experience = document.getElementById("experience").value;
  const errors = document.getElementById("errors").value;
  const fileInput = document.getElementById("fileUpload");
  const webhookURL = "https://discord.com/api/webhooks/1387053089332269137/WvGpGnXEV7Nwp35Yygp3NvIrvsuZuvta_1EA386KZHC33I2Q5vI2nA8PyEsPmg7VZGyG";

  const formData = new FormData();

  const content = `**📝New Tester Application**\n\n**👤 Username:** ${username}\n**📧 Email:** ${email}\n**💡 Experience:** ${experience || "N/A"}\n**🐞 Error Report:** ${errors || "N/A"}`;

  formData.append("content", content);

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    if (file.size <= 10 * 1024 * 1024) {
      formData.append("file", file);
    } else {
      alert("File size must be under 10MB.");
      return;
    }
  }

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      document.getElementById("testerForm").reset();
      document.getElementById("formContainer").style.display = "none";
      document.getElementById("thankYouMessage").style.display = "block";
    } else {
      alert("There was a problem submitting the form.");
    }
  } catch (error) {
    console.error("Error submitting the form:", error);
    alert("An error occurred. Please try again later.");
  }
});
