const http = require('http');
const faker = require('faker');

function generate(max = 30) {
  const list = [];
  for (let i = 0; i < max; i++) {
    list.push({
      title: faker.name.title(),
      past: faker.date.past(),
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      paragraphs: faker.lorem.paragraphs(),
    })
  }
  return list;
}

// 创建 HTTP 服务器。
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });
  const content = generate();
  res.end(JSON.stringify(content));
});

server.listen(9600);

console.log(`server http://localhost:9600`);