document.getElementById("testerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const experience = document.getElementById("experience").value;
  const errors = document.getElementById("errors").value;

  const webhookURL = "https://discord.com/api/webhooks/1387053089332269137/WvGpGnXEV7Nwp35Yygp3NvIrvsuZuvta_1EA386KZHC33I2Q5vI2nA8PyEsPmg7VZGyG";

  const data = {
    content: "**New Tester Application Received**",
    embeds: [
      {
        title: "Form Submission",
        fields: [
          { name: "ROBLOX Username", value: username || "N/A" },
          { name: "Email", value: email || "N/A" },
          { name: "Experience", value: experience || "N/A" },
          { name: "Error Report", value: errors || "N/A" }
        ],
        color: 16776960
      }
    ]
  };

  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  document.getElementById("testerForm").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
});
