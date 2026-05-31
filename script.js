//Dado primitivo: string
let nome = "Pedro";
console.log("Olá, " + nome + "!");

//Dado primitivo: number
let idade = 23;
console.log("Você tem", + idade + " anos.");

//Dado primitivo: bolean (True ou False)
let maiordeidade = idade >= 18;
console.log("É maior de idade?" + maiordeidade);

//Dado primitivo: Null e Undefined
let endereco = null
console.log("Endereço:", endereco);
// nesse caso, embora seja um valor nulo, eu declarei explicitamente que se trata de um valor nulo, então o valor dessa variável está definido.
console.log("Multiplicação:", endereco * 2);
// Quando se multiplica um valor nulo por qualquer número, o própio javascript faz com que esse produto resulte em 0
let telefone; 
// Essa variável será considerada undefined, porque, diferente de endereço, que está explicitamente definida como null, telefone não tem nada mostrando o que essa variável possui, então está indefinida.
console.log("Telefone:", telefone);
console.log("Multiplicação:", telefone * 2);
// Essa multiplicação vai ficar como NaN (not a number), pois não tem como multiplicar um número por algo que nem se sabe exatamente o que é.
