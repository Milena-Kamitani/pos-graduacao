import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'
/*query parameters: quando precisa de uma url Stateful - enviar informacoes q n sao sensiveis
utilizados mt para filtros, paginacao
http://localhost:3333/users?userId=1&name=milena*/ 


/* route parameters:  sao paramentros n nomiados, tbm ficam na rota
usado normalmente para idendificacao de recursos
 GET http://localhost:3333/users/1
*/ 

/*request body: ele é utilizado para envio de informacoes de um formulario
pode ser para envio de quantas informacoes a gnt quiser

usamos no insonimia
passam pelo protocolo HTTPS

POST http:localhost:333/users

n fica nenhuma informcao do body na url
*/ 



const server = http.createServer(async(req, res)=>{
  const {method, url} = req
  await json(req,res) 

    const route = routes.find(route =>{
      return route.method === method && route.path.test(url)
    })

    if(route){
      const routeParams = req.url.match(route.path)
      const { query, ...params } = routeParams.groups

    req.params = params
    req.query = query ? extractQueryParams(query) : {}

      return route.handler(req,res)
    }
  
  return res.writeHead(404).end('Not found') 
})


server.listen(3333)