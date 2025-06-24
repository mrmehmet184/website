
document.getElementById("testerForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const experience = document.getElementById("experience").value;
  const errors = document.getElementById("errors").value;
  const files = document.getElementById("files").files;

  const webhookURL = "https://discord.com/api/webhooks/1387053089332269137/WvGpGnXEV7Nwp35Yygp3NvIrvsuZuvta_1EA386KZHC33I2Q5vI2nA8PyEsPmg7VZGyG";

  const formData = new FormData();
  formData.append("content", "**New Tester Application Submitted**");
  formData.append("username", "Form Bot");
  formData.append("embeds", JSON.stringify([{
    title: "Application Details",
    fields: [
      { name: "ROBLOX Username", value: username || "N/A" },
      { name: "Email", value: email || "N/A" },
      { name: "Experience", value: experience || "N/A" },
      { name: "Error Report", value: errors || "N/A" }
    ]
  }]));

  let totalSize = 0;
  for (let i = 0; i < files.length; i++) {
    totalSize += files[i].size;
    if (files[i].size < 8000000) {
      formData.append("file" + i, files[i]);
    }
  }

  if (totalSize > 10 * 1024 * 1024) {
    alert("Total file size exceeds 10MB. Please upload smaller files.");
    return;
  }

  await fetch(webhookURL, {
    method: "POST",
    body: formData
  });

  document.getElementById("formContainer").style.display = "none";
  document.getElementById("thankYouContainer").style.display = "block";
});

// Preview
document.getElementById("files").addEventListener("change", function () {
  const preview = document.getElementById("previewArea");
  preview.innerHTML = "";
  Array.from(this.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      preview.appendChild(img);
    };
    if (file.type.startsWith("image/")) {
      reader.readAsDataURL(file);
    }
  });
});
