$(document).ready(() => {
$( "#submit" ).click(function(e) {
  e.preventDefault();
  alert("This form is for demonstration only please use regular email instead");
});

$( ".fa" ).click(function() {
  const FCCURL = "https://www.freecodecamp.org/pethaf",
        GITHUBURL = "https://www.github.com/pethaf",
        CODEPENURL = "https://codepen.io/pethaf/";
  if(this.classList.value.indexOf("free-code-camp") != -1)
  {
    window.open(FCCURL,'_blank');
  }
  else if(this.classList.value.indexOf("github") != -1)
  {
    window.open(GITHUBURL,'_blank');
  }
  else if(this.classList.value.indexOf("codepen") !=-1)
  {
      window.open(CODEPENURL,'_blank');

  }
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
});
});
