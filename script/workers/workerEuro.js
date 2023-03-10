addEventListener("message", () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000)
})

async function conectaAPI(){
    const conexao = await fetch("https://economia.awesomeapi.com.br/last/EUR-BRL")
    const conexaoTraduzida = await conexao.json();
    postMessage(conexaoTraduzida.EURBRL)
}