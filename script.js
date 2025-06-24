document.getElementById("testerForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const experience = document.getElementById("experience").value;
  const errors = document.getElementById("errors").value;
  const fileInput = document.getElementById("fileInput");

  const webhookURL = "https://l.webhook.party/hook/QhQM%2F61wDLvcggjfU5z0X20pNIxnSgNdHGtx7cSRz8bYokr9HHLCISTkVKKocushDvtwByxIaS0DZgveclxKmUfFr%2FvMD4BYhE7p2pHTqAukpqjDvgMQcUbfhmMxHoR4rlhPOGUZo3vsj1Dhsp02yeyfqJlo8XZ51zJ9GbFxsV7hvPeNF8myHnZXA9VSwer3UZHfOMUlnJlbI9%2FiIZbcIuFuRDNZkCcUchriiBp22wtcweBEuleNbcQefv5bed0p4RTIirzWLvAKrETCaqxop1juDdYJymtQ%2FxpaZI7KUqtcg4c0Bl3YNXg3Ckuh56l2PDW3Hg9LVolzy6hN5t%2BOktkPJS16Ze%2Fnox%2BEwoKI1SJAqKEcHfTkDi9MMX5sFh%2FE6qJDMU4tFE4%3D/e6moehMdDlMtKiga";

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
    content: "**New Tester Application Submitted**",
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
