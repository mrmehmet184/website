document.getElementById("testerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const experience = document.getElementById("experience").value;
  const errors = document.getElementById("errors").value;
  const files = document.getElementById("upload").files;

  const webhookURL = "https://discord.com/api/webhooks/1387053089332269137/WvGpGnXEV7Nwp35Yygp3NvIrvsuZuvta_1EA386KZHC33I2Q5vI2nA8PyEsPmg7VZGyG";

  const formData = new FormData();
  formData.append("payload_json", JSON.stringify({
    content: "**New Tester Application Received**",
    embeds: [{
      title: "Form Submission",
      fields: [
        { name: "ROBLOX Username", value: username || "N/A" },
        { name: "Email", value: email || "N/A" },
        { name: "Experience", value: experience || "N/A" },
        { name: "Error Report", value: errors || "N/A" }
      ],
      color: 16776960
    }]
  }));

  for (let i = 0; i < files.length && i < 10; i++) {
    formData.append("files[" + i + "]", files[i]);
  }

  await fetch(webhookURL, {
    method: "POST",
    body: formData
  });

  document.getElementById("testerForm").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
});
