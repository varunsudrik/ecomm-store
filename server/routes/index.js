const express = require('express');
const router = express.Router();

/* GET home page. */

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 30000,
    image: 'https://www.svgrepo.com/show/535468/laptop.svg',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 13000,
    image: 'https://www.svgrepo.com/show/529899/smartphone-vibration.svg',
  },
  {
    id: 3,
    name: 'Headphones',
    price: 2500,
    image: 'https://www.svgrepo.com/show/522143/headphone.svg',
  },
  {
    id: 4,
    name: 'Keyboard',
    price: 700,
    image: 'https://www.svgrepo.com/show/533085/keyboard-alt-1.svg',
  },
  {
    id: 5,
    name: 'Mouse',
    price: 350,
    image: 'https://www.svgrepo.com/show/533144/mouse-alt-1.svg',
  },
  {
    id: 6,
    name: 'Monitor',
    price: 15000,
    image: 'https://www.svgrepo.com/show/533138/monitor-alt-5.svg',
  },
  {
    id: 7,
    name: 'Webcam',
    price: 4000,
    image: 'https://www.svgrepo.com/show/533173/webcam-slash-alt.svg',
  },
  {
    id: 8,
    name: 'Speaker',
    price: 5000,
    image: 'https://www.svgrepo.com/show/532715/speaker.svg',
  },
  {
    id: 9,
    name: 'Microphone',
    price: 1000,
    image: 'https://www.svgrepo.com/show/535502/microphone.svg',
  },
  {
    id: 10,
    name: 'Charger',
    price: 250,
    image: 'https://www.svgrepo.com/show/291893/charger.svg',
  },
  {
    id: 11,
    name: 'USB Cable',
    price: 120,
    image: 'https://www.svgrepo.com/show/9172/plug.svg',
  },
  {
    id: 12,
    name: 'Tablet',
    price: 22000,
    image: 'https://www.svgrepo.com/show/10259/tabs.svg',
  },
];

router.get('/json', (req, res) => {
  res.json(products);
});

module.exports = router;
