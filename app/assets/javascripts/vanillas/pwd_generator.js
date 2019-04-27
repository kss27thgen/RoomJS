document.addEventListener("turbolinks:load", () => {
  const slider = document.getElementById('pwdSlider');
  const label = document.getElementById('pwdLabel');
  const btn = document.getElementById('pwdBtn');
  const result = document.getElementById('btnResult');
  const numbers = document.getElementById('pwdNumbers');
  const symbols = document.getElementById('pwdSymbols');


  function getPassword() {
    let seed_letters = 'abcdefghijklmnopqrstuvwxyz';
    let seed_numbers = '0123456789';
    let seed_symbols = '+*@?%$&#';
    let len = slider.value;
    let pwd = '';

    seed = seed_letters + seed_letters.toUpperCase();
      if(numbers.checked === true){
        seed += seed_numbers;
      }
      if(symbols.checked){
        seed += seed_symbols;
      }
      for(let i = 0; i < len; i++){
        pwd += seed[Math.floor(Math.random() * seed.length)]
      }
    result.value = pwd;
  }


  if(slider){
    slider.addEventListener('change', ()=> {
      label.innerHTML = slider.value;
    });
  }
  if(btn){
    btn.addEventListener('click', ()=> {
      getPassword();
    });
  }
  // if(result){
  //   result.addEventListener('click', ()=> {
  //     result.select();
  //   });
  // }
});
