//criando um objeto
//as propriedades pode ter aspas simples ou nao na sua criacao
var pessoa = {
    nome : "diego",
    idade : 27,
    estaComSono : true,
    endereco : null,
    altura : undefined,
    cores : ["azul", "amarelo", "branco"],
    comidas : ["Massa", "Bolo", "Bicoito"],
    mostraNome(){ //definindo uma funcao
        console.log("Funcao dentro do objeto " + this.nome);
    },
    mostraCores(){
        this.cores.forEach(i => {
            console.log("Cor atual: " + i);
        });
    },
    mostraComidasPreferidas(){
        for (let comida of this.comidas) {
            console.log(comida);
        }
    }
};

console.log(pessoa.nome + " " + typeof(pessoa.nome));
console.log(pessoa.idade + " " + typeof(pessoa.idade));
console.log(pessoa.estaComSono + " " + typeof(pessoa.estaComSono));
console.log(pessoa.endereco + " " + typeof(pessoa.endereco));
console.log(pessoa.altura + " " + typeof(pessoa.altura));

pessoa.mostraNome();
pessoa.mostraCores();
pessoa.mostraComidasPreferidas();

//retornando o primeiro caracter de uma string
var primeiroCaracter = pessoa.nome.charAt(0);
console.log(primeiroCaracter);