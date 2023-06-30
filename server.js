const express = require('express');
const app = express();
const path = require('path');
var SerialPort = require('serialport').SerialPort;
const port = new SerialPort({
    baudRate: 9600,
    path: "COM3", // Replace 'COM3' with the appropriate serial port name
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/command', (req, res) => {
  const command = req.body.command;

  if (command === 'on') {
    port.write('1');
    res.send('LED turned on.');
  } else if (command === 'off') {
    port.write('0');
    res.send('LED turned off.');
  } else {
    res.status(400).send('Invalid command.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
