function insert(num) {
  document.form.textView.value = document.form.textView.value+num;
}
function equal() {
  var exp = document.form.textView.value;
  if(exp){
    document.form.textView.value = eval(exp);
  }
}
function clean() {
  document.form.textView.value = "";
}
function kare(num) { 
     const karesi = num * num;
     document.form.textView.value = karesi;
}   
function karekok(num) {
  const koku = Math.sqrt(num);
  document.form.textView.value = koku;
}
function fac(num) {
  const x = faktoriyel(num);
  document.form.textView.value = x;
}

function faktoriyel(n) {
  return (n != 1) ? n * faktoriyel(n - 1) : 1;
}

