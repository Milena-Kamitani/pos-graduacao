/*Um buffer é uma área de memória temporária usada para armazenar dados enquanto eles estão sendo transferidos 
de um lugar para outro. O principal objetivo de um buffer é permitir que essas transferências aconteçam de forma mais 
eficiente e rápida, lidando com as diferenças de velocidade entre os dispositivos ou 
componentes que estão trocando dados.
*/
const buf = Buffer.from("Ok") //imprime numeros pq é em hexadecimal
console.log(buf.toJSON())

//Buffer é uma maneira eficiente de manipular dados binários em Node.js.