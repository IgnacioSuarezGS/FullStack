const http = require('http')

const server = http.createServer(
	(req, res) => {
        console.log("me han hecho una peticion")
        res.setHeader("content-type", "text/javascript; charset=utf-8");
		// res.setHeader("content-type", "application/json");
		res.write(JSON.stringify(numeroRandom()));
		res.end()
	}
);


server.listen(5000, () => {
	console.log('servidor listo en el puerto 5000')
})

function numeroRandom() {
    let min =1000;
    let max =5000;
    return Math.floor(Math.random() * (max - min)) + min;
}
