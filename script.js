const generateRandNum = num => {
    return Math.floor(Math.random() * num)
}

let usersWisdom = {
    mainAnswer: "",
    futureAdvice: "",
    luckyStar: ""
};

const possibleWisdoms = {
    mainAnswer: ['who', 'when', 'why', 'what'],
    futureAdvice: ['the hell', 'the fuck', 'damn'],
    luckyStar: ['tomato', 'Zeus', 'necklace'],
}

const generateWisdom = () => {
    for (let wisdomName in possibleWisdoms) {
        let randIndx = generateRandNum(possibleWisdoms[wisdomName].length);

        switch (wisdomName) {
            case "mainAnswer":
                usersWisdom.mainAnswer = possibleWisdoms[wisdomName][randIndx];
                break;
            case "futureAdvice":
                usersWisdom.futureAdvice = possibleWisdoms[wisdomName][randIndx];
                break;
            case "luckyStar":
                usersWisdom.luckyStar = possibleWisdoms[wisdomName][randIndx];
                break;
        }

        document.getElementById("mainAnswer").innerHTML = usersWisdom.mainAnswer;
        document.getElementById("futureAdvice").innerHTML = usersWisdom.futureAdvice;
        document.getElementById("luckyStar").innerHTML = usersWisdom.luckyStar;

    
    }
}

