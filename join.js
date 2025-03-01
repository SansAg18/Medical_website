
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  var message = "<h2>Registration Details</h2>";
  formData.forEach(function (value, key) {
    message += "<p><strong>" + key.charAt(0).toUpperCase() + key.slice(1) + ":</strong> " + value + "</p>";

  });
  document.getElementById("message").innerHTML = message;
  this.reset();

});

