
//Toggle Function to Display and Hide Product Suggestion Form
function toggleForm(form) {
  if(form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

//If Selection "Trouble Finding Product" Open Form1, Close Form2, Reset Form2
function troubleFindingProduct(value) {
  if(value === "troubleFindingProduct") {
    toggleForm(document.getElementById("form2"));
    openForm(document.getElementById('form1'));
    document.getElementById('form2Tag').reset();
  }
}

//Opens Form
function openForm(form) {
  if(form.style.display === "none") {
    form.style.display = "block";
  }
}