document.getElementById("testerForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const experience = document.getElementById("experience").value;
  const errors = document.getElementById("errors").value;
  const fileInput = document.getElementById("fileInput");

  const webhookURL = "https://discord.com/api/webhooks/1387053089332269137/WvGpGnXEV7Nwp35Yygp3NvIrvsuZuvta_1EA386KZHC33I2Q5vI2nA8PyEsPmg7VZGyG";

  const formData = new FormData();
  formData.append("content", "**New Tester Application**");
  formData.append("username", username);
  formData.append("email", email);
  formData.append("experience", experience);
  formData.append("errors", errors);
  if (fileInput.files.length > 0 && fileInput.files[0].size <= 10 * 1024 * 1024) {
    formData.append("file", fileInput.files[0]);
  }

  const fields = [
    { name: "ROBLOX Username", value: username || "N/A" },
    { name: "Email", value: email || "N/A" },
    { name: "Experience", value: experience || "N/A" },
    { name: "Bug Report", value: errors || "N/A" }
  ];

  const payload = {
    content: "**New Tester Application Submitted** @1332351738744930374",
    embeds: [
      {
        title: "Form Submission",
        fields: fields
      }
    ]
  };

  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (fileInput.files.length > 0 && fileInput.files[0].size <= 10 * 1024 * 1024) {
    await fetch(webhookURL, {
      method: "POST",
      body: formData
    });
  }

  document.querySelector(".container").innerHTML = "<h2>Thank you for your application!</h2><p>We have received your submission.</p>";
});
