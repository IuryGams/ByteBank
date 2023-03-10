addEventListener("message", event => {
    conectaAPI()
    setInterval( () => conectaAPI(), 5000)
})

async function conectaAPI(){
    const conexao = await fetch("https://economia.awesomeapi.com.br/last/JPY-BRL")
    const conexaoTraduzida = await conexao.json();
    postMessage(conexaoTraduzida.JPYBRL)
}
