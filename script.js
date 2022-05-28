const coinsImages = {
    bitcoin: "resources/purpleDjMixer.png",
    dogecoin: "resources/djVinyl.png",
    ethereum: "resources/pinkDjMixer.png"
}

const getCoins = () => [
    {
        name: 'bitcoin',
        image: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022"
    },

    {
        name: 'ethereum',
        image: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022"
    },

    {
        name: 'tether',
        image: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=022"
    },
    {
        name: 'usd coin',
        image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=022"
    },

    {
        name: 'bnb',
        image: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=022"
    },

    {
        name: 'xrp',
        image: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022'
    },

    {
        name: 'binance usd',
        image: 'https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=022'
    },

    {
        name: 'cardano',
        image: 'https://cryptologos.cc/logos/cardano-ada-logo.svg?v=022'
    },

    {
        name: 'solana',
        image: 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=022'
    },

    {
        name: 'dogecoin',
        image: 'https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=022'
    },

    {
        name: 'polkadot',
        image: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=022'
    },

    {
        name: 'wrapped bitcoin',
        image: 'https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg?v=022'
    },

    {
        name: 'avalanche',
        image: 'https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=022'
    },

    {
        name: 'tron',
        image: 'https://cryptologos.cc/logos/tron-trx-logo.svg?v=022'
    },

    {
        name: 'dai',
        image: 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=022'
    },

    {
        name: 'shiba inu',
        image: 'https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=022'
    },

    {
        name: 'polygon',
        image: 'https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022'
    },

    {
        name: 'litecoin',
        image: 'https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=022'
    },

    {
        name: 'cronos',
        image: 'https://cryptologos.cc/logos/crypto-com-coin-cro-logo.svg?v=022'
    },

    {
        name: 'uniswap',
        image: 'https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=022'
    },
];

const getAdvices = () => ['you need a stradegy like a Swiss fuckin watch', 'all risk-takers manage risk', " long-term or short-term trades - you need to choose", 'Consider laddering your buys and sells', 'Be in it for the long term', 'Automate purchases, it would be nice', 'if wanna get lots - se trading bots', 'your portfolio said it wants diversity'];

const getPatrons = () => ['Elon Musk', 'Andreas Antonopoulos', 'Adam Back', 'Nick Szabo', 'CryptoCred', 'Notsofast', 'PlanB', 'Josh Olszewicz', 'WhalePanda', 'DonAlt', 'Loomdart', 'Starbust', 'Lil Bubble', 'Altcoin Sara', 'Changpeng Zhao', 'Nicholas Merten', 'Roger Ver', 'Gavin Andresen', 'Barry Silbert', 'Balaji S. Srinivasan', 'Chamath Palihapitiya', 'Erik Voorhees', 'Fred Ehrsam', 'Jack Dorsey'];

const getRandomItem = array => {
    let randIndx = Math.floor(Math.random() * array.length);
    return array[randIndx];
}

const roll = () => {
    const randomCoin = getRandomItem(getCoins());
    const randomAdvice = getRandomItem(getAdvices());
    const randomPatron = getRandomItem(getPatrons());

    document.getElementById("coin-icon").src = randomCoin.image;
    document.getElementById("coin").innerHTML = randomCoin.name;
    document.getElementById("advice").innerHTML = randomAdvice;
    document.getElementById("patron").innerHTML = randomPatron;
}

const reloadPage = () => {
    window.location.reload();
}