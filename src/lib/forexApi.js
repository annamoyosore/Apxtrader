const API_KEY = import.meta.env.VITE_FOREX_API_KEY;

export async function getPrice(pair = "EUR/USD") {
  try {
    const res = await fetch(
      `https://api.twelvedata.com/price?symbol=${pair}&apikey=${API_KEY}`
    );

    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

export async function getCandles(pair = "EUR/USD") {
  try {
    const res = await fetch(
      `https://api.twelvedata.com/time_series?symbol=${pair}&interval=1min&apikey=${API_KEY}`
    );

    return await res.json();
  } catch (err) {
    console.log(err);
  }
}