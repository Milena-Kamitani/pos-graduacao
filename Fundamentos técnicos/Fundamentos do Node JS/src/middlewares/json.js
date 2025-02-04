//middleware - é um interceptador
/*um middleware é uma função que tem acesso ao objeto request (req), ao objeto response (res) e à função next, 
que passa o controle para o próximo middleware ou função de rota na cadeia de execução.*/

export async function json(req, res) {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    req.body = null
  }

  res.setHeader('Content-type', 'application/json')
}