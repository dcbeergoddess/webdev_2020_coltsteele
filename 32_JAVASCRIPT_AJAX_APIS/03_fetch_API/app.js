/*
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
  .then(res => {
    console.log("RESPONSE, WAITING TO PARSE", res)
    return res.json();
  })
  .then(data => {
    console.log('DATA PARSED', data)
    console.log('BTC PRICE:', data.ticker.price)
  })
  .catch(e => {
    console.log('ERROR', e)
  });
  */

  const fetchBitcoinPrice = async () => {
    try {
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    console.log('FULL DATA RESPONSE:', res);
    const data = await res.json();
    console.log('BTC PRICE:', data.ticker.price);
    } catch(e) {
      console.log('Something Went Wrong!!!')
    }
  }

  fetchBitcoinPrice();

  /*
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
  .then(res => {
    console.log('BTC Price:', res.data.ticker.price)
  })
  .catch(err => {
    console.log('ERROR!', err)
  })
*/

const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    console.log('BTC Price:', res.data.ticker.price)
  } catch(e) {
    console.log('ERROR!')
  }
}
fetchBitcoinPrice();
