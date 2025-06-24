
document.getElementById("upload").addEventListener("change", function (e) {
  const previewArea = document.getElementById("previewArea");
  previewArea.innerHTML = "";
  const files = Array.from(e.target.files);
  let totalSize = 0;

  files.forEach((file, index) => {
    totalSize += file.size;
    if (totalSize > 10 * 1024 * 1024) {
      alert("Total file size must be under 10MB!");
      e.target.value = "";
      previewArea.innerHTML = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = function (evt) {
      const div = document.createElement("div");
      div.className = "preview-item";
      div.style.backgroundImage = `url(${evt.target.result})`;

      const removeBtn = document.createElement("span");
      removeBtn.textContent = "×";
      removeBtn.onclick = function () {
        files.splice(index, 1);
        div.remove();
      };
      div.appendChild(removeBtn);
      previewArea.appendChild(div);
    };
    reader.readAsDataURL(file);
  });
});
