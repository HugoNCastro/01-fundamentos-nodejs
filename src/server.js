import http from 'http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if(method === 'GET' && url === '/users'){
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users'){
    users.push({
      id: 1,
      name: "John Doe",
      email: "john.doe@gmail.com",
    })

    return res.end().writeHead(201)
  }

  return res.writeHead(404).end();
})

server.listen('3333');