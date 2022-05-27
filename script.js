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
        }
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
                usersWisdom.patron = (possibleWisdoms[wisdomName][randIndx]);
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



// coin: ['bitcoin', 'ethereum', 'tether', 'usd coin', 'bnb', 'xrp', 'binance usd', 'cardano', 'solana', 'dogecoin', 'polkadot', 'wrapped bitcoin', 'avalanche', 'tron', 'dai', 'shiba inu', 'polygon', 'litecon', 'cronos', 'uniswap'],

