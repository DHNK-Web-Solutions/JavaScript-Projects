function calculateAge() {
  var dob =new  Date(document.getElementById("dob").value);
  var today = new Date();
  var diffYears = today.getFullYear() - dob.getFullYear();
  var diffMonths = today.getMonth() -dob.getMonth();
  if (diffMonths < 0 || (diffMonths === 0 && today.getDate() < dob.getDate())) {
    diffYears--;
  }
  document.getElementById("age").textContent = diffYears
}
