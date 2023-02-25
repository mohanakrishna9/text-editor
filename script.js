function myFunction() {
  let a = document.getElementById("inputtext").value;
  let b = a.toUpperCase();
  document.getElementById("outputtext").value = b;
}
function clearContent() {
  document.getElementById("outputtext").value = "";
  document.getElementById("inputtext").value = "";
}
