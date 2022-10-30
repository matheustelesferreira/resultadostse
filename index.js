const { default: axios } = require('axios');
var vezes = 0;
const logData = async () => {
	const apuracoes = await axios("https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json")
		.then(res => res.data.cand.map(cand => ({ name: cand.nm, votos: cand.vap, porcentagem: cand.pvap })));
	console.table(apuracoes);
	const bahia = await axios("https://resultados.tse.jus.br/oficial/ele2022/547/dados-simplificados/ba/ba-c0003-e000547-r.json")
	.then(res => res.data.cand.map(cand => ({ name: cand.nm, votos: cand.vap, porcentagem: cand.pvap })));
	console.table(bahia);
	console.log(vezes++);
	setTimeout(logData, 10000 * 2);
} 

logData();
