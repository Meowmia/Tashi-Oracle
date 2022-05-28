const generateRandNum = num => {
    return Math.floor(Math.random() * num)
}

let usersWisdom = {
    coin: "",
    advice: "",
    patron: " "
};

const possibleWisdoms = {
    coin: [
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
    ],
    advice: ['you need a stradegy like a Swiss fuckin` watch', 'all risk-takers manage risk', 'your portfolio said it wants diversity'],
    patron: ['Elon Musk', 'Andreas Antonopoulos', 'Adam Back', 'Nick Szabo', 'CryptoCred', 'Notsofast', 'PlanB', 'Josh Olszewicz', 'WhalePanda', 'DonAlt', 'Loomdart', 'Starbust', 'Lil Bubble', 'Altcoin Sara', 'Changpeng Zhao', 'Nicholas Merten', 'Roger Ver', 'Gavin Andresen', 'Barry Silbert', 'Balaji S. Srinivasan', 'Chamath Palihapitiya', 'Erik Voorhees', 'Fred Ehrsam', 'Jack Dorsey'],
}


const generateWisdom = () => {
    for (let wisdomName in possibleWisdoms) {
        let randIndx = generateRandNum(possibleWisdoms[wisdomName].length);
        let img = document.getElementById("coin-icon");

        switch (wisdomName) {
            case "coin":
                usersWisdom.coin = possibleWisdoms[wisdomName][randIndx].name;
                img.src = possibleWisdoms[wisdomName][randIndx].image;
                break;
            case "advice":
                usersWisdom.advice = possibleWisdoms[wisdomName][randIndx];
                break;
            case "patron":
                usersWisdom.patron = "Crypto patron - " + (possibleWisdoms[wisdomName][randIndx]);
                break;
        }

        document.getElementById("coin").innerHTML = usersWisdom.coin;
        document.getElementById("advice").innerHTML = usersWisdom.advice;
        document.getElementById("patron").innerHTML = usersWisdom.patron;

    }
}

const reloadPage = () => {
    window.location.reload();
}
