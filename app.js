
const aplicar = ( endereco)=> {
   document.getElementById('rua').value = endereco.logradouro;
   document.getElementById('bairro').value = endereco.bairro;
   document.getElementById('cidade').value = endereco.localidade;
   document.getElementById('uf').value = endereco.uf;
   document.getElementById('load').innerHTML= "protinho";
}


const pesquisar = async ()=>{
    document.getElementById('load').innerHTML= "carregando"
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(url);
    const endereco = await dados.json();
    aplicar(endereco);
}




document.getElementById('cep').addEventListener('focusout' , pesquisar)