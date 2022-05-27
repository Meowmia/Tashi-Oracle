const generateRandNum = num => {
    return Math.floor(Math.random() * num)
}

let usersWisdom = {
    coin: "",
    advice: "",
    patron: ""
};

const possibleWisdoms = {
    coin: ['bitcoin', 'ethereum', 'tether', 'usd coin', 'bnb', 'xrp', 'binance usd', 'cardano', 'solana', 'dogecoin', 'polkadot', 'wrapped bitcoin', 'avalanche', 'tron', 'dai', 'shiba inu', 'polygon', 'litecon', 'cronos', 'uniswap'],
    advice: ['you need a stradegy like a Swiss fuckin watch', 'all risk-takers manage risk', 'your portfolio said it wants diversity' ],
    patron: ['Elon Musk', 'Andreas Antonopoulos', 'Adam Back', 'Nick Szabo', 'CryptoCred', 'Notsofast', 'PlanB', 'Josh Olszewicz', 'WhalePanda', 'DonAlt', 'Loomdart', 'Starbust', 'Lil Bubble', 'Altcoin Sara', 'Changpeng Zhao', 'Nicholas Merten', 'Roger Ver', 'Gavin Andresen', 'Barry Silbert', 'Balaji S. Srinivasan', 'Chamath Palihapitiya', 'Erik Voorhees', 'Fred Ehrsam', 'Jack Dorsey'],
}

const roll = () => {
    const randomCoin = getRandomItem(getCoins());
    const randomAdvice = getRandomItem(getAdvices());
    const randomPatron = getRandomItem(getPatrons());

    const advice = { coin: randomCoin, advice: randomAdvice, patron: randomPatron  };

    render(advice);
}


const generateWisdom = () => {
    for (let wisdomName in possibleWisdoms) {
        let randIndx = generateRandNum(possibleWisdoms[wisdomName].length);
        let image = document.getElementById("photo");

        switch (wisdomName) {
            case "coin":
                usersWisdom.coin = possibleWisdoms[wisdomName][randIndx];
                image.src = coinsImages[usersWisdom.coin];
                break;
            case "advice":
                usersWisdom.advice = possibleWisdoms[wisdomName][randIndx];
                break;
            case "patron":
                usersWisdom.patron = possibleWisdoms[wisdomName][randIndx];
                break;
        }

        document.getElementById("coin").innerHTML = usersWisdom.coin;
        document.getElementById("advice").innerHTML = usersWisdom.advice;
        document.getElementById("patron").innerHTML = usersWisdom.patron;

    }
}

const coinsImages = {
    bitcoin: "resources/purpleDjMixer.png",
    dogecoin: "resources/djVinyl.png",
    ethereum: "resources/pinkDjMixer.png"
}

// const changeData = () => {
//     let image = document.getElementById("photo");
//     image.src = storageObject.bitcoin.image;
//     document.getElementById("textPh").innerHTML = storageObject.bitcoin.name;
// }


// const storage = [
//     {
//         name: 'Linda',
//         personality: 'Best bulochka ever'
//     },

//     {
//         name: 'Marsel',
//         personality: 'Craziest Karusel'
//     },

//     {
//         name: 'Pushok',
//         personality: 'Lovely flyffy pirozhok'
//     },

// ]

// console.log(storage[0].name);
