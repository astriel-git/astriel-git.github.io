const puppeteer = require("puppeteer");

async function scrapeCoinData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.coingecko.com/en/coins/avalanche/historical_data#panel"
  ); // Replace with the actual CoinGecko URL

  await page.waitForSelector('tbody[data-target="historical.tableBody"] tr');

  const data = await page.evaluate(() => {
    const tableRows = Array.from(
      document.querySelectorAll('tbody[data-target="historical.tableBody"] tr')
    );

    return tableRows.map((row) => {
      const date = row.querySelector("th").textContent.trim();
      const marketCap = row.querySelector("td:nth-child(2)").textContent.trim();
      const volume = row.querySelector("td:nth-child(3)").textContent.trim();
      const price = row.querySelector("td:nth-child(4)").textContent.trim();
      const previousClose = row
        .querySelector("td:nth-child(5)")
        .textContent.trim();

      return {
        date,
        marketCap,
        volume,
        price,
        previousClose,
      };
    });
  });

  console.log(data);

  await browser.close();
}

scrapeCoinData();
