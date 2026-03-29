// --- СЛОВНИК ПЕРЕКЛАДІВ ---
const translations = {
    en: {
        nav_home: "Home", nav_market: "Market", nav_portfolio: "Portfolio",
        edit_profile: "⚙️ Edit Profile", logout: "🚪 Logout", login_btn: "Login",
        home_title: "Smart Trading", home_subtitle: "Redefined",
        home_desc: "Your personal asset management center. Trade seamlessly across markets.",
        favorites_title: "⭐ FAVORITES", trending_title: "🔥 TRENDING ASSETS", features_title: "Why Choose Us",
        feat_1: "Lightning Fast", feat_1_d: "Execute trades instantly with zero delay.",
        feat_2: "Bank-Grade Security", feat_2_d: "Your assets are protected by top-tier encryption.",
        feat_3: "Live Data", feat_3_d: "Get real-time market updates and accurate charts.",
        market_title: "Market", search_ph: "Search HBAR, BTC...",
        avail_balance: "Available Balance", footer_text: "© 2026 Crypto-Dashboard Pro. All rights reserved.",
        buy_limit: "Buy Limit", sell_limit: "Available to Sell", amount_ph: "Amount",
        buy_btn: "BUY", sell_btn: "SELL",
        edit_profile_title: "EDIT PROFILE", new_user_ph: "New Username", avatar_ph: "Avatar URL (Optional)", new_pass_ph: "New Password", save: "SAVE", cancel: "CANCEL",
        sign_in: "Sign In", sign_up: "Sign Up", user_ph: "Username", pass_ph: "Password", continue: "CONTINUE",
        toggle_to_reg: "New here? Create account", toggle_to_log: "Already have an account? Sign in",
        alert_no_funds: "Insufficient funds!", alert_no_coins: "You don't have enough coins!", alert_enter_amt: "Please enter a valid amount.",
        alert_created: "Account created! Please log in.", alert_wrong: "Wrong email or password.", alert_exists: "User already exists!",
        owned_label: "Owned"
    },
    uk: {
        nav_home: "Головна", nav_market: "Ринок", nav_portfolio: "Портфель",
        edit_profile: "⚙️ Налаштування", logout: "🚪 Вийти", login_btn: "Увійти",
        home_title: "Розумний Трейдинг", home_subtitle: "Нового Рівня",
        home_desc: "Ваш персональний центр керування активами. Торгуйте на ринках без затримок.",
        favorites_title: "⭐ ОБРАНЕ", trending_title: "🔥 ПОПУЛЯРНІ АКТИВИ", features_title: "Чому ми?",
        feat_1: "Блискавична Швидкість", feat_1_d: "Миттєве виконання угод без затримок.",
        feat_2: "Надійний Захист", feat_2_d: "Ваші активи захищені шифруванням найвищого рівня.",
        feat_3: "Дані наживо", feat_3_d: "Отримуйте оновлення ринку та точні графіки в реальному часі.",
        market_title: "Ринок", search_ph: "Пошук HBAR, BTC...",
        avail_balance: "Доступний Баланс", footer_text: "© 2026 Crypto-Dashboard Pro. Всі права застережені.",
        buy_limit: "Ліміт покупки", sell_limit: "Доступно для продажу", amount_ph: "Кількість",
        buy_btn: "КУПИТИ", sell_btn: "ПРОДАТИ",
        edit_profile_title: "РЕДАГУВАТИ ПРОФІЛЬ", new_user_ph: "Нове ім'я", avatar_ph: "URL Аватара (Необов'язково)", new_pass_ph: "Новий пароль", save: "ЗБЕРЕГТИ", cancel: "СКАСУВАТИ",
        sign_in: "Вхід", sign_up: "Реєстрація", user_ph: "Ім'я користувача", pass_ph: "Пароль", continue: "ПРОДОВЖИТИ",
        toggle_to_reg: "Новий користувач? Створити акаунт", toggle_to_log: "Вже є акаунт? Увійти",
        alert_no_funds: "Недостатньо коштів!", alert_no_coins: "У вас недостатньо монет!", alert_enter_amt: "Будь ласка, введіть коректну суму.",
        alert_created: "Акаунт створено! Увійдіть.", alert_wrong: "Невірний email або пароль.", alert_exists: "Користувач вже існує!",
        owned_label: "В наявності"
    },
    cs: {
        nav_home: "Domů", nav_market: "Trh", nav_portfolio: "Portfolio",
        edit_profile: "⚙️ Upravit Profil", logout: "🚪 Odhlásit se", login_btn: "Přihlásit",
        home_title: "Chytré Obchodování", home_subtitle: "Nově",
        home_desc: "Vaše osobní centrum správy aktiv. Obchodujte bez prodlev.",
        favorites_title: "⭐ OBLÍBENÉ", trending_title: "🔥 POPULÁRNÍ AKTIVA", features_title: "Proč si vybrat nás",
        feat_1: "Blesková Rychlost", feat_1_d: "Okamžité provedení obchodů bez zpoždění.",
        feat_2: "Bezpečné Úložiště", feat_2_d: "Vaše aktiva jsou chráněna špičkovým šifrováním.",
        feat_3: "Živá Data", feat_3_d: "Získejte aktualizace trhu a přesné grafy v reálném čase.",
        market_title: "Trh", search_ph: "Hledat HBAR, BTC...",
        avail_balance: "Dostupný Zůstatek", footer_text: "© 2026 Crypto-Dashboard Pro. Všechna práva vyhrazena.",
        buy_limit: "Limit Nákupu", sell_limit: "Dostupné k Prodeji", amount_ph: "Množství",
        buy_btn: "KOUPIT", sell_btn: "PRODAT",
        edit_profile_title: "UPRAVIT PROFIL", new_user_ph: "Nové jméno", avatar_ph: "URL Avatara (Volitelné)", new_pass_ph: "Nové heslo", save: "ULOŽIT", cancel: "ZRUŠIT",
        sign_in: "Přihlášení", sign_up: "Registrace", user_ph: "Uživatelské jméno", pass_ph: "Heslo", continue: "POKRAČOVAT",
        toggle_to_reg: "Jste tu noví? Vytvořit účet", toggle_to_log: "Již máte účet? Přihlásit se",
        alert_no_funds: "Nedostatek prostředků!", alert_no_coins: "Nemáte dostatek mincí!", alert_enter_amt: "Zadejte prosím platnou částku.",
        alert_created: "Účet vytvořen! Prosím přihlaste se.", alert_wrong: "Nesprávný email nebo heslo.", alert_exists: "Uživatel již existuje!",
        owned_label: "Vlastněno"
    }
};

// --- ГЛОБАЛЬНІ ЗМІННІ ---
let currentUser = JSON.parse(localStorage.getItem('logged_user')) || null;
// Ensure existing users have favorites & avatar array initialized
if (currentUser) {
    currentUser.favorites = currentUser.favorites || [];
    currentUser.avatar = currentUser.avatar || "";
}

let activeCoin = null;
let chartInstance = null;
let currentCurrency = localStorage.getItem('pref_currency') || 'usd';
let currentLang = localStorage.getItem('pref_lang') || 'en';

let currentInterval = '1'; 
let chartCache = {}; 

let cachedData = { favorites: [], trending: [], market: [], portfolio: [], rates: { usd: 1, eur: 0.92, czk: 23.5 } };
const currencySymbols = { usd: '$', eur: '€', czk: 'Kč' };

// Ініціалізація UI елементів
document.getElementById('currency-select').value = currentCurrency;
document.getElementById('lang-select').value = currentLang;

// --- СИСТЕМА ПЕРЕКЛАДУ ---
function t(key) { return translations[currentLang][key]; }

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
    updateUI();
    if (activeCoin) updateModalInfo();
    document.getElementById('auth-toggle-text').innerText = isReg ? t('toggle_to_log') : t('toggle_to_reg');
}

function changeLanguage() {
    currentLang = document.getElementById('lang-select').value;
    localStorage.setItem('pref_lang', currentLang);
    applyTranslations();
    renderAll();
}

function updateCurrencyDisplay() {
    currentCurrency = document.getElementById('currency-select').value;
    localStorage.setItem('pref_currency', currentCurrency);
    renderAll();
    updateUI();
    if (activeCoin && !document.getElementById('chart-modal').classList.contains('hidden')) {
        updateModalInfo();
        if (chartInstance) {
            chartInstance.data.datasets[0].data = chartInstance.data.datasets[0].dataRaw.map(p => p * cachedData.rates[currentCurrency]);
            chartInstance.update();
        }
    }
}

function renderAll() {
    if (cachedData.favorites.length) renderCards(cachedData.favorites, 'favorites-grid');
    if (cachedData.trending.length) renderCards(cachedData.trending, 'trending-grid');
    if (cachedData.market.length) renderCards(cachedData.market, 'market-grid');
    if (cachedData.portfolio.length) renderCards(cachedData.portfolio, 'portfolio-grid');
}

function formatPrice(usdPrice) {
    if (usdPrice === undefined || usdPrice === null) return "0.00";
    const converted = usdPrice * cachedData.rates[currentCurrency];
    const symbol = currencySymbols[currentCurrency];
    const options = converted < 0.1 ? { minimumFractionDigits: 4, maximumFractionDigits: 6 } : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    const formatted = converted.toLocaleString('en-US', options);
    return currentCurrency === 'czk' ? `${formatted} ${symbol}` : `${symbol}${formatted}`;
}

// --- API FETCH ---
async function fetchFromAPI(endpoint) {
    try {
        const res = await fetch(`https://api.coingecko.com/api/v3${endpoint}`);
        if (!res.ok) throw new Error("API Limit");
        return await res.json();
    } catch (e) { return null; }
}

// --- НАВІГАЦІЯ ---
function showSection(id) {
    ['home-view', 'market-view', 'portfolio-view'].forEach(s => document.getElementById(s).classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    if (id === 'home-view') {
        if (!cachedData.trending.length) loadTrending();
        loadFavorites();
    }
    if (id === 'market-view' && !cachedData.market.length) loadMarket();
    if (id === 'portfolio-view') loadPortfolio();
}

async function loadFavorites() {
    const favSection = document.getElementById('favorites-section');
    if (!currentUser || !currentUser.favorites || currentUser.favorites.length === 0) {
        favSection.classList.add('hidden');
        return;
    }
    const ids = currentUser.favorites.join(',');
    const data = await fetchFromAPI(`/coins/markets?vs_currency=usd&ids=${ids}`);
    if (data) { 
        cachedData.favorites = data; 
        renderCards(data, 'favorites-grid'); 
        favSection.classList.remove('hidden');
    }
}

async function loadTrending() {
    const data = await fetchFromAPI('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4');
    if (data) { cachedData.trending = data; renderCards(data, 'trending-grid'); }
}
async function loadMarket() {
    const data = await fetchFromAPI('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15');
    if (data) { cachedData.market = data; renderCards(data, 'market-grid'); }
}
async function loadPortfolio() {
    if (!currentUser || !Object.keys(currentUser.portfolio).length) {
        document.getElementById('portfolio-grid').innerHTML = '<p class="col-span-full text-center py-20 text-gray-500 italic">No assets owned yet.</p>';
        return;
    }
    const ids = Object.keys(currentUser.portfolio).join(',');
    const data = await fetchFromAPI(`/coins/markets?vs_currency=usd&ids=${ids}`);
    if (data) { cachedData.portfolio = data; renderCards(data, 'portfolio-grid'); }
}

function renderCards(data, containerId) {
    const container = document.getElementById(containerId);
    if(!container) return;
    container.innerHTML = data.map(c => {
        const owned = currentUser?.portfolio?.[c.id] || 0;
        return `
        <div onclick="openCoin('${c.id}')" class="bg-gray-800 p-6 rounded-3xl border border-gray-700 hover:border-blue-500 transition cursor-pointer group shadow-xl">
            <div class="flex justify-between items-center mb-4">
                <img src="${c.image}" class="w-12 h-12 group-hover:scale-110 transition duration-300">
                <span class="font-bold text-sm ${c.price_change_percentage_24h > 0 ? 'text-emerald-400' : 'text-red-400'}">
                    ${c.price_change_percentage_24h > 0 ? '+' : ''}${c.price_change_percentage_24h?.toFixed(2)}%
                </span>
            </div>
            <h3 class="text-xl font-black uppercase italic tracking-tighter">${c.symbol} <span class="text-gray-500 text-[10px] not-italic">${c.name}</span></h3>
            <p class="text-2xl font-mono mt-1">${formatPrice(c.current_price)}</p>
            ${owned > 0 ? `<div class="mt-4 pt-3 border-t border-gray-700 text-[10px] font-bold text-yellow-500 uppercase italic">${t('owned_label')}: ${owned.toFixed(4)}</div>` : ''}
        </div>`;
    }).join('');
}

// --- НОВА МОДАЛКА МОНЕТИ ТА ГРАФІК ---
async function openCoin(id) {
    if (activeCoin?.id !== id) {
        chartCache = {}; 
        currentInterval = '1'; 
    }

    activeCoin = [...cachedData.favorites, ...cachedData.trending, ...cachedData.market, ...cachedData.portfolio].find(c => c.id === id) 
                 || (await fetchFromAPI(`/coins/markets?vs_currency=usd&ids=${id}`))[0];
    
    updateModalInfo();
    updateIntervalButtons();
    document.getElementById('chart-modal').classList.replace('hidden', 'flex');
    loadChartData(id, currentInterval);
}

function toggleFavorite() {
    if (!currentUser) return openAuth();
    const index = currentUser.favorites.indexOf(activeCoin.id);
    if (index === -1) {
        currentUser.favorites.push(activeCoin.id);
    } else {
        currentUser.favorites.splice(index, 1);
    }
    saveUser();
    updateModalInfo(); // Оновлюємо зірочку
    if (!document.getElementById('home-view').classList.contains('hidden')) loadFavorites(); // Оновлюємо сітку обраного
}

async function loadChartData(id, days) {
    if (chartCache[days]) {
        drawChart(chartCache[days]);
        return;
    }

    let url = `/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
    
    if (parseFloat(days) < 1) {
        url = `/coins/${id}/market_chart?vs_currency=usd&days=1`;
    }

    const data = await fetchFromAPI(url);
    
    if (data && data.prices) {
        let prices = data.prices;

        if (days === '0.01') { 
            const fifteenMinsAgo = Date.now() - (15 * 60 * 1000);
            prices = prices.filter(p => p[0] >= fifteenMinsAgo);
        } else if (days === '0.04') { 
            const oneHourAgo = Date.now() - (60 * 60 * 1000);
            prices = prices.filter(p => p[0] >= oneHourAgo);
        } else if (days === '0.5') { 
            const twelveHoursAgo = Date.now() - (12 * 60 * 60 * 1000);
            prices = prices.filter(p => p[0] >= twelveHoursAgo);
        }

        chartCache[days] = prices;
        drawChart(prices);
    }
}

function changeInterval(days) {
    currentInterval = days;
    updateIntervalButtons();
    loadChartData(activeCoin.id, days);
}

function updateIntervalButtons() {
    document.querySelectorAll('.int-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-int') === currentInterval;
        btn.classList.toggle('text-blue-400', isActive);
        btn.classList.toggle('bg-gray-900', isActive);
        btn.classList.toggle('text-gray-500', !isActive);
    });
}

function drawChart(prices) {
    const ctx = document.getElementById('mainChart').getContext('2d');
    if (chartInstance) chartInstance.destroy();
    const rate = cachedData.rates[currentCurrency];
    const rawData = prices.map(p => p[1]); 
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: prices.map(p => {
                const date = new Date(p[0]);
                // Жорстко прописуємо 'en-US' для дати та часу, щоб завжди було англійською
                if (parseFloat(currentInterval) <= 1) {
                    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
                } else {
                    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                }
            }),
            datasets: [{ 
                label: 'Price', dataRaw: rawData, data: rawData.map(p => p * rate), 
                borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true, tension: 0.2, pointRadius: 0, pointHoverRadius: 6,
                pointHoverBackgroundColor: '#fff', pointHoverBorderColor: '#3b82f6', pointHoverBorderWidth: 2
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(17, 24, 39, 0.9)', padding: 12, displayColors: false,
                    callbacks: {
                        title: (context) => { return context[0].label; },
                        label: (context) => {
                            const rate = cachedData.rates[currentCurrency];
                            return formatPrice(context.parsed.y / rate);
                        }
                    }
                }
            },
            scales: { 
                x: { 
                    display: true, 
                    grid: { display: false }, 
                    ticks: { color: '#6b7280', maxRotation: 0, autoSkip: true, maxTicksLimit: 7 }
                }, 
                y: { 
                    grid: { color: 'rgba(55, 65, 81, 0.4)', drawBorder: false }, 
                    ticks: { color: '#6b7280' } 
                } 
            } 
        }
    });
}

function closeModal(id) {
    document.getElementById(id).classList.replace('flex', 'hidden');
    if (id === 'chart-modal') {
        activeCoin = null;
        chartCache = {}; 
    }
}

// --- ТОРГІВЛЯ ТА КОРИСТУВАЧ ---
function executeTrade(type) {
    if (!currentUser) { closeModal('chart-modal'); return openAuth(); }
    const input = document.getElementById(type + '-val');
    const amount = parseFloat(input.value);
    if (!amount || amount <= 0) return alert(t('alert_enter_amt'));

    const totalCostUsd = amount * activeCoin.current_price;
    if (type === 'buy') {
        if (currentUser.balance < totalCostUsd) return alert(t('alert_no_funds'));
        currentUser.balance -= totalCostUsd;
        currentUser.portfolio[activeCoin.id] = (currentUser.portfolio[activeCoin.id] || 0) + amount;
    } else {
        const held = currentUser.portfolio[activeCoin.id] || 0;
        if (amount > held) return alert(t('alert_no_coins'));
        currentUser.balance += totalCostUsd;
        currentUser.portfolio[activeCoin.id] -= amount;
        if (currentUser.portfolio[activeCoin.id] <= 0) delete currentUser.portfolio[activeCoin.id];
    }
    
    saveUser(); 
    input.value = ''; 
    updateUI(); 
    updateModalInfo();
    
    // Ми викликаємо завантаження портфеля відразу після угоди
    loadPortfolio(); 
}

function updateUI() {
    const badge = document.getElementById('user-badge');
    if (currentUser) {
        const avatarHtml = currentUser.avatar 
            ? `<img src="${currentUser.avatar}" class="w-10 h-10 rounded-full object-cover border border-gray-700">`
            : `<div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center font-black border border-gray-700 text-white">${currentUser.username[0].toUpperCase()}</div>`;

        badge.innerHTML = `
            <div class="text-right hidden sm:block">
                <p class="text-sm font-bold text-white leading-none mb-1">${currentUser.username}</p>
                <p class="text-[10px] text-emerald-400 font-mono">${formatPrice(currentUser.balance)}</p>
            </div>
            ${avatarHtml}`;
        document.getElementById('port-balance-display').innerText = formatPrice(currentUser.balance);
    } else {
        badge.innerHTML = `<button onclick="openAuth()" class="bg-blue-600 px-6 py-2 rounded-full font-bold text-xs uppercase text-white">${t('login_btn')}</button>`;
        document.getElementById('port-balance-display').innerText = formatPrice(0);
    }
}

function updateModalInfo() {
    if (!activeCoin) return;
    document.getElementById('modal-coin-title').innerText = activeCoin.name.toUpperCase();
    document.getElementById('modal-coin-price').innerText = formatPrice(activeCoin.current_price);
    
    // Відображаємо статус зірочки "Обране"
    const favBtn = document.getElementById('fav-btn');
    const isFav = currentUser && currentUser.favorites && currentUser.favorites.includes(activeCoin.id);
    favBtn.innerText = isFav ? '⭐' : '☆';
    favBtn.classList.toggle('text-yellow-400', isFav);
    favBtn.classList.toggle('text-gray-500', !isFav);

    const owned = currentUser?.portfolio?.[activeCoin.id] || 0;
    document.getElementById('buy-limit').innerText = `${formatPrice(currentUser?.balance || 0)}`;
    document.getElementById('sell-limit').innerText = `${owned.toFixed(4)} ${activeCoin.symbol.toUpperCase()}`;
}

function toggleMenu(e) { if(!currentUser) return openAuth(); e.stopPropagation(); document.getElementById('profile-menu').classList.toggle('active'); }
window.onclick = (e) => { const menu = document.getElementById('profile-menu'); if (menu && !e.target.closest('#user-section')) menu.classList.remove('active'); }
function openAuth() { document.getElementById('auth-modal').classList.replace('hidden', 'flex'); }
function openEditModal() { 
    document.getElementById('edit-username').value = currentUser.username; 
    document.getElementById('edit-avatar').value = currentUser.avatar || "";
    document.getElementById('edit-modal').classList.replace('hidden', 'flex'); 
}

function saveProfile() {
    const n = document.getElementById('edit-username').value.trim();
    const a = document.getElementById('edit-avatar').value.trim();
    const p = document.getElementById('edit-password').value;
    
    if (n) currentUser.username = n; 
    currentUser.avatar = a; 
    if (p) currentUser.pass = p;
    
    saveUser(); 
    closeModal('edit-modal'); 
    updateUI();
}
function saveUser() { localStorage.setItem('logged_user', JSON.stringify(currentUser)); localStorage.setItem('u_' + currentUser.email, JSON.stringify(currentUser)); }
function logout() { localStorage.removeItem('logged_user'); location.reload(); }

let isReg = false;
function toggleAuth() {
    isReg = !isReg;
    document.getElementById('auth-title').innerText = isReg ? t('sign_up') : t('sign_in');
    document.getElementById('auth-toggle-text').innerText = isReg ? t('toggle_to_log') : t('toggle_to_reg');
    document.getElementById('reg-fields').classList.toggle('hidden', !isReg);
}

document.getElementById('auth-btn').onclick = () => {
    const email = document.getElementById('auth-email').value.trim(), pass = document.getElementById('auth-pass').value;
    if (!email || !pass) return;
    if (isReg) {
        if (localStorage.getItem('u_'+email)) return alert(t('alert_exists'));
        const user = { username: document.getElementById('auth-user').value.trim() || 'Trader', avatar: "", email, pass, balance: 10000, portfolio: {}, favorites: [] };
        localStorage.setItem('u_'+email, JSON.stringify(user)); alert(t('alert_created')); toggleAuth();
    } else {
        const u = JSON.parse(localStorage.getItem('u_'+email));
        if (u && u.pass === pass) { 
            currentUser = u; 
            currentUser.favorites = currentUser.favorites || []; // Для старих акаунтів
            currentUser.avatar = currentUser.avatar || ""; // Для старих акаунтів
            saveUser(); 
            closeModal('auth-modal'); 
            updateUI(); 
            if (!document.getElementById('portfolio-view').classList.contains('hidden')) loadPortfolio(); 
            if (!document.getElementById('home-view').classList.contains('hidden')) loadFavorites();
        }
        else alert(t('alert_wrong'));
    }
};

document.getElementById('search-btn').onclick = async () => {
    const query = document.getElementById('search-input').value.trim();
    if (!query) return;
    const searchData = await fetchFromAPI(`/search?query=${query}`);
    if (searchData && searchData.coins.length > 0) {
        const ids = searchData.coins.slice(0, 5).map(c => c.id).join(',');
        const marketData = await fetchFromAPI(`/coins/markets?vs_currency=usd&ids=${ids}`);
        if (marketData) renderCards(marketData, 'market-grid');
    }
};

// Запуск
applyTranslations();
updateUI();
showSection('home-view');