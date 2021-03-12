// THIS IS A STRING OF JSON
const data = `{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}`

//TURN INTO VALID JS OBJECT
const parseData = JSON.parse(data)
console.log(parseData);

//EXTRACT BITCOIN PRICE
const BTC = parseData.ticker.price
console.log(BTC)

//THIS IS A JS OBJECT
const dog = {
  breed: 'lab',
  color: 'black',
  isAlive: 'true',
  owner: undefined
};
console.log(dog)

//TURN TO JSON FORMAT
const dogJSON = JSON.stringify(dog);
console.log(dogJSON);
//RETURNS: {"breed":"lab","color":"black","isAlive":"true"}


