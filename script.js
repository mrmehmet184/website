document.getElementById("testerForm").addEventListener("submit", function (e) {
  setTimeout(function () {
    document.getElementById("testerForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
  }, 100);
});
