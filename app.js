let czkRate = 23.5;

async function fetchExchangeRate() {
    try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await res.json();
        czkRate = data.rates.CZK;
        console.log("Курс USD/CZK оновлено:", czkRate);
    } catch (e) {
        console.error("Не вдалося отримати курс валют");
    }
}

async function getPrices() {
    await fetchExchangeRate();

    try {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';
        const response = await fetch(url);
        const data = await response.json();

        const container = document.getElementById('crypto-container');
        container.innerHTML = '';

        data.forEach(coin => {
            const priceInCZK = coin.current_price * czkRate;
            const color = coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400';

            container.innerHTML += `
                <div class="bg-gray-800 p-5 rounded-xl border border-gray-700 flex items-center justify-between hover:border-blue-500 transition shadow-lg">
                    <div class="flex items-center gap-4">
                        <img src="${coin.image}" alt="${coin.name}" class="w-10 h-10">
                        <div>
                            <h3 class="font-bold uppercase text-white">${coin.symbol}</h3>
                            <p class="text-xs text-gray-500">${coin.name}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-xl font-mono text-blue-400 leading-none">
                            $${coin.current_price.toLocaleString()}
                        </p>
                        <p class="text-sm text-gray-400 italic mt-1">
                            ${priceInCZK.toLocaleString(undefined, {maximumFractionDigits: 0})} CZK
                        </p>
                        <p class="text-xs mt-2 font-bold ${color}">
                            ${coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error("Помилка завантаження цін:", error);
        document.getElementById('crypto-container').innerHTML = `<p class="text-red-500 text-center col-span-full">Помилка завантаження. Спробуйте пізніше.</p>`;
    }
}

getPrices();
setInterval(getPrices, 60000);