document.addEventListener("DOMContentLoaded", function(){

  const jstest = document.getElementById('jstest');

  jstest.addEventListener('click', function(){
    this.textContent = 'hi!';
  });

});

