var nome = prompt("Informe seu nome:");
var renda = Number(prompt("Informe sua renda:"));
while(isNaN(renda))
{
    renda = Number(prompt("(Valor inválido, letras não são aceitas) Informe sua renda:"));
}
var soma = 0;
var qntd = Number(prompt("Informe quantas despesas deseja informar:"));

while(isNaN(qntd)) 
{
    qntd = Number(prompt("(Valor inválido, letras não são aceitas) Informe quantas despesas:"));
}

if(qntd <= 0)
    {
        qntd = 1;
    }
    else if(qntd > 5)
    {
        qntd = 5;
    }

var despesas = new Array(qntd);

for(let i = 0; i < despesas.length; i++)
{
    despesas[i] = Number(prompt(`Informe sua ${i+1} despesa:`));
    while(isNaN(despesas[i]))
    {
        despesas[i] = Number(prompt(`(Valor inválido, letras não são aceitas) Informe sua ${i+1} despesa:`));
    }
    soma+= despesas[i];
}

var sobra = 0;
var mensg = "";
if(soma > renda)
{
    mensg = "⚠️ Atenção: você gastou mais do que ganhou.";
    
}
else 
{
    sobra = renda - soma;
    if(sobra >= renda * 0.30)
    {
        mensg = "✅ Ótimo: boa margem de sobra.";
    }
    else
    {
        mensg = "🙂 Ok: dá para melhorar a sobra.";
    }
}

var resultado = 
`Nome: ${nome}
Renda: ${renda.toFixed(2)}
Total de Despesas: ${soma.toFixed(2)}
Sobra: ${sobra.toFixed(2)}
${mensg}`

alert(resultado);

console.log("--Resultados--")
console.log(`Nome: ${nome}`)
console.log(`Renda: ${renda.toFixed(2)}`)
console.log(`Total de Despesas ${soma.toFixed(2)}`)
console.log(`Sobra: ${sobra.toFixed(2)}`)
console.log(`${mensg}`)