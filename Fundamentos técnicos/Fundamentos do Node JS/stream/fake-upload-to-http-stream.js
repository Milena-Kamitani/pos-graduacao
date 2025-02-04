//como se fosse nosso front
import {Readable} from 'node:stream'
class OneToHundredStream extends Readable{
  index =1 
  _read(){
    const i = this.index++

    setTimeout(()=>{
      if(i >5){
        this.push(null)
      
      }else {
        const buf = Buffer.from(String(i))
        this.push(buf)
      }
    }, 1000)

  }
}

fetch('http://localhost:3334', {
  method:'POST',
  body:new OneToHundredStream(),
  duplex: 'half' // Adicionando o duplex para indicar que o corpo é um stream
}).then(response=>{
  return response.text()
}).then(data=>{
  console.log(data)
})