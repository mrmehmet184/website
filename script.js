document.getElementById("surveyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("surveyForm").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
});