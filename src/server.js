import http from 'node:http';

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;
  console.log(method, url)

  if(method === 'GET' && url === '/users') {
    return response
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users));

  } else if(method === 'POST' && url === '/users') {

    users.push({id: 1, name: "User", email: "example@email.com"})

    return response.writeHead(201).end();
  };

  return response.writeHead(404).end();
});

server.listen(3333); // localhost:3333
