const path = require('path');
const child_process = require('child_process');

const subprocessClient = child_process.exec(`node ${path.join(__dirname, 'client.js')}`);

subprocessClient.stdout.on('data', function (data) {
   console.log(data)
})

const subprocessServe = child_process.exec(`node ${path.join(__dirname, 'server.js')}`);

subprocessServe.stdout.on('data', function (data) {
   console.log(data)
})