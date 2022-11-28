
var div = document.getElementById('fora');
var val = '';

div.addEventListener('click', function(e) {
    var select = e.target.id

    console.log(select)
    if(select=='botao#' | select=='botao*'){
        val='';
        document.getElementById('meuTelefone').innerHTML = '';
        return
    }
    var valor = document.querySelector('#'+select).value;

    console.log(valor);

    val = val + valor;

    console.log(val);

    document.getElementById('meuTelefone').innerHTML = val;

});
  