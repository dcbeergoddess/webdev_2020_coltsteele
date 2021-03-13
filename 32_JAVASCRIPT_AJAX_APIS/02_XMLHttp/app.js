const req = new XMLHttpRequest();

req.onload = function() {
  console.log('ALL DONE WITH REQUEST!!!')
  console.log(this); //PRINTS RESPONSE OBJECT
  console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  console.log(data.ticker.price)
};
req.onerror = function(err) {
  console.log('ERROR', err);
  console.log(this)
};
req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send();

