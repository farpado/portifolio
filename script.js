var ham = document.querySelector(".ham");

ham.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("open-menu");
});


document.querySelector("#qtde").addEventListener("change", atualizarPreco) // seleciona qtde "change" qnd tiver alterçao
document.querySelector("#js").addEventListener("click", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("click", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("click", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function (){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco (){
    const qtde = document.querySelector("#qtde").value // pega o valor que esta na input
    const js = document.querySelector("#js").checked
    const layoutSim = document.querySelector("#layout-sim").checked
    const layoutNao = document.querySelector("#layout-nao").checked
    const prazo = document.querySelector("#prazo").value


    let preco = qtde * 100;
    if (js){
        preco = preco + (preco * 0.10)
    }
    if (layoutSim){
        preco = preco + 500
    } if (layoutNao){
        preco = preco
    }

    let taxa = 1 - prazo*0.1;
    preco *=  1 + taxa

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

