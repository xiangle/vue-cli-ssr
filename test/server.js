const faker = require('faker');
const express = require('express');

function generateList(max = 30) {

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


const app = express();

app.get('/', function (req, res) {

  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  const content = generateList();

  res.send(content);

})

app.get('/news', function (req, res) {

  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  const content = generateList(40);

  res.send(content);

})

app.get('/news/details/*', function (req, res) {

  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  res.send({
    title: faker.name.title(),
    past: faker.date.past(),
    name: faker.name.firstName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    paragraphs: faker.lorem.paragraphs(),
  });

})

app.listen(9600, () => console.log('http://localhost:9600'))