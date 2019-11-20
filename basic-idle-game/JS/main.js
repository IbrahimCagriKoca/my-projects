let coins = 0;
let coinsPS = 0;
let coinsPC = 1;
let growers = 0;
let growersPS = 0;
let growHouse = 0;
let growHousePS = 0;
let plantations = 0;
let plantationsPS = 0;
let irrigations = 0;
let irrigationsPS = 0;
let greenHouse = 0;
let greenHousePS = 0;
let weedCartel = 0;
let weedCartelPS = 0;
let weedBaron = 0;
let weedBaronPS = 0;
let coinsPrint = 0;
let coinsPSPrint = 0;
let growersPrint = 0;
let growersPSPrint = 0;
let growHousePrint = 0;
let growHousePSPrint = 0;
let plantationsPrint = 0;
let plantationsPSPrint = 0;
let irrigationsPrint = 0;
let irrigationsPSPrint = 0;
let greenHousePrint = 0;
let greenHousePSPrint = 0;
let weedCartelPrint = 0;
let weedCartelPSPrint = 0;
let weedBaronPrint = 0;
let weedBaronPSPrint = 0;

function multiple() {
    if (document.getElementById("multiple").innerHTML === "x1") {
        document.getElementById("multiple").innerHTML = "x10"
    } else if (document.getElementById("multiple").innerHTML === "x10") {
        document.getElementById("multiple").innerHTML = "x100"
    } else if (document.getElementById("multiple").innerHTML === "x100") {
        document.getElementById("multiple").innerHTML = "x1000"
    } else if (document.getElementById("multiple").innerHTML === "x1000") {
        document.getElementById("multiple").innerHTML = "x1"
    }
}

function gainCoin() {
    coins += coinsPC;
}

setInterval(function renderWeedBaron() {
    document.getElementById("coins").innerHTML = "Weed: " + coinsPrint;
    document.getElementById("coinsPS").innerHTML = "Weeds per second: " +
        coinsPSPrint;

    document.getElementById("growers").innerHTML = "Grower: " + growersPrint;
    document.getElementById("growersPS").innerHTML = "Weeds per second: " +
        coinsPSPrint;

    document.getElementById("grower-house").innerHTML = "Grower House: " + growHousePrint;
    document.getElementById("grower-housePS").innerHTML = "Growers per second: " +
        growersPSPrint;

    document.getElementById("plantations").innerHTML = "Plantations House: " + plantationsPrint;
    document.getElementById("plantationsPS").innerHTML = "Grower houses per second: " +
        growHousePSPrint;

    document.getElementById("irrigations").innerHTML = "Irrigations House: " + irrigationsPrint;
    document.getElementById("irrigationsPS").innerHTML = "Plantations per second: " +
        plantationsPSPrint;

    document.getElementById("green-house").innerHTML = "Green House : " + greenHousePrint;
    document.getElementById("green-housePS").innerHTML = "Irrigations per second: " +
        irrigationsPSPrint;

    document.getElementById("weed-cartel").innerHTML = "Weed Cartel: " + weedCartelPrint;
    document.getElementById("weed-cartelPS").innerHTML = "Green House per second: " +
        greenHousePSPrint;

    document.getElementById("weed-baron").innerHTML = "Weed Baron: " + weedBaronPrint;
    document.getElementById("weed-baronPS").innerHTML = "Weed Cartel per second: " +
        weedCartelPSPrint;
});

setInterval(function coinPS() {
    coins += coinsPS;
    coinsPS = growers + growersPS;
    growers += growersPS;
    growersPS = growHouse * 5 + growHousePS;
    growHouse += growHousePS;
    growHousePS = plantations * 10 + plantationsPS;
    plantations += plantationsPS;
    plantationsPS = irrigations * 50 + irrigationsPS;
    irrigations += irrigationsPS;
    irrigationsPS = greenHouse * 100 + greenHousePS;
    greenHouse += greenHousePS;
    greenHousePS = weedCartel * 500 + weedCartelPS;
    weedCartel += weedCartelPS;
    weedCartelPS = weedBaron * 1000 + weedBaronPS;
}, 1000);

function getGrowers() {

    if (document.getElementById("multiple").innerHTML === "x1") {
        if (coins >= 10) {
            coinsPS += 1;
            coins -= 10;
            growers += 1;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x10") {
        if (coins >= 10 * 10) {
            coinsPS += 10;
            coins -= 10 * 10;
            growers += 10;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x100") {
        if (coins >= 10 * 100) {
            coinsPS += 100;
            coins -= 10 * 100;
            growers += 100;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x1000") {
        if (coins >= 10 * 1000) {
            coinsPS += 1000;
            coins -= 10 * 1000;
            growers += 1000;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    }
}

function getGrowHouses() {

    if (document.getElementById("multiple").innerHTML === "x1") {
        if (coins >= 1000 && growers >= 10) {
            growersPS += 5;
            coins -= 1000;
            growers -= 10;
            growHouse += 1;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x10") {
        if (coins >= 1000 * 10 && growers >= 10 * 10) {
            growersPS += 5 * 10;
            coins -= 1000 * 10;
            growers -= 10 * 10;
            growHouse += 10;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x100") {
        if (coins >= 1000 * 100 && growers >= 10 * 100) {
            growersPS += 5 * 100;
            coins -= 1000 * 100;
            growers -= 10 * 100;
            growHouse += 100;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x1000") {
        if (coins >= 1000 * 1000 && growers >= 10 * 1000) {
            growersPS += 5 * 1000;
            coins -= 1000 * 1000;
            growers -= 10 * 1000;
            growHouse += 1000;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    }
}

function getPlantations() {

    if (document.getElementById("multiple").innerHTML === "x1") {
        if (coins >= 100000 && growHouse >= 100) {
            growHousePS += 10;
            coins -= 100000;
            growHouse -= 100;
            plantations += 1;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x10") {
        if (coins >= 100000 * 10 && growHouse >= 100 * 10) {
            growHousePS += 10 * 10;
            coins -= 100000 * 10;
            growHouse -= 100 * 10;
            plantations += 10;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x100") {
        if (coins >= 100000 * 100 && growHouse >= 100 * 100) {
            growHousePS += 10 * 100;
            coins -= 100000 * 100;
            growHouse -= 100 * 100;
            plantations += 100;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x1000") {
        if (coins >= 100000 * 1000 && growHouse >= 100 * 1000) {
            growHousePS += 10 * 1000;
            coins -= 100000 * 1000;
            growHouse -= 100 * 1000;
            plantations += 1000;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    }
}

function getIrrigations() {

    if (document.getElementById("multiple").innerHTML === "x1") {
        if (coins >= 10000000 && plantations >= 1000) {
            plantationsPS += 50;
            coins -= 10000000;
            plantations -= 1000;
            irrigations += 1;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x10") {
        if (coins >= 10000000 * 10 && plantations >= 1000 * 10) {
            plantationsPS += 50 * 10;
            coins -= 10000000 * 10;
            plantations -= 1000 * 10;
            irrigations += 10;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x100") {
        if (coins >= 10000000 * 100 && plantations >= 1000 * 100) {
            plantationsPS += 50 * 100;
            coins -= 10000000 * 100;
            plantations -= 1000 * 100;
            irrigations += 100;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x1000") {
        if (coins >= 10000000 * 1000 && plantations >= 1000 * 1000) {
            plantationsPS += 50 * 1000;
            coins -= 10000000 * 1000;
            plantations -= 1000 * 1000;
            irrigations += 1000;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    }
}

function getGreenHouses() {

    if (document.getElementById("multiple").innerHTML === "x1") {
        if (coins >= 1000000000 && irrigations >= 10000) {
            irrigationsPS += 100;
            coins -= 1000000000;
            irrigations -= 10000;
            greenHouse += 1;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x10") {
        if (coins >= 1000000000 * 10 && irrigations >= 10000 * 10) {
            irrigationsPS += 100 * 10;
            coins -= 1000000000 * 10;
            irrigations -= 10000 * 10;
            greenHouse += 10;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x100") {
        if (coins >= 1000000000 * 100 && irrigations >= 10000 * 100) {
            irrigationsPS += 100 * 100;
            coins -= 1000000000 * 100;
            irrigations -= 10000 * 100;
            greenHouse += 100;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x1000") {
        if (coins >= 1000000000 * 1000 && irrigations >= 10000 * 1000) {
            irrigationsPS += 100 * 1000;
            coins -= 1000000000 * 1000;
            irrigations -= 10000 * 1000;
            greenHouse += 1000;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    }
}

function getWeedCartels() {

    if (document.getElementById("multiple").innerHTML === "x1") {
        if (coins >= 100000000000 && greenHouse >= 100000) {
            greenHousePS += 500;
            coins -= 100000000000;
            greenHouse -= 100000;
            weedCartel += 1;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x10") {
        if (coins >= 100000000000 * 10 && greenHouse >= 100000 * 10) {
            greenHousePS += 500 * 10;
            coins -= 100000000000 * 10;
            greenHouse -= 100000 * 10;
            weedCartel += 10;
        } else {
            alert("Sorry, you don't have enough coins.")
        }
    } else if (document.getElementById("multiple").innerHTML === "x100") {
        if (coins >= 100000000000 * 100 && greenHouse >= 100000 * 100) {
            greenHousePS += 500 * 100;
            coins -= 100000000000 * 100;
            greenHouse -= 100000 * 100;
            weedCartel += 100;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x1000") {
        if (coins >= 100000000000 * 1000 && greenHouse >= 100000 * 1000) {
            greenHousePS += 500 * 1000;
            coins -= 100000000000 * 1000;
            greenHouse -= 100000 * 1000;
            weedCartel += 1000;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    }
}

function getWeedBarons() {

    if (document.getElementById("multiple").innerHTML === "x1") {
        if (coins >= 10000000000000 && weedCartel >= 1000000) {
            weedCartelPS += 1000;
            coins -= 10000000000000;
            weedCartel -= 1000000;
            weedBaron += 1;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x10") {
        if (coins >= 10000000000000 * 10 && weedCartel >= 1000000 * 10) {
            weedCartelPS += 1000 * 10;
            coins -= 10000000000000 * 10;
            weedCartel -= 1000000 * 10;
            weedBaron += 10;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x100") {
        if (coins >= 10000000000000 * 100 && weedCartel >= 1000000 * 100) {
            weedCartelPS += 1000 * 100;
            coins -= 10000000000000 * 100;
            weedCartel -= 1000000 * 100;
            weedBaron += 100;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    } else if (document.getElementById("multiple").innerHTML === "x1000") {
        if (coins >= 10000000000000 * 1000 && weedCartel >= 1000000 * 1000) {
            weedCartelPS += 1000 * 1000;
            coins -= 10000000000000 * 1000;
            weedCartel -= 1000000 * 1000;
            weedBaron += 1000;
        } else {
            alert("Sorry, you don't have enough coins.");
        }
    }
}

setInterval(function goTest() {
    coinsPrint = test(coins);
    coinsPSPrint = test(coinsPS);
    growersPrint = test(growers);
    growersPSPrint = test(growersPS);
    growHousePrint = test(growHouse);
    growHousePSPrint = test(growHousePS);
    plantationsPrint = test(plantations);
    plantationsPSPrint = test(plantationsPS);
    irrigationsPrint = test(irrigations);
    irrigationsPSPrint = test(irrigationsPS);
    greenHousePrint = test(greenHouse);
    greenHousePSPrint = test(greenHousePS);
    weedCartelPrint = test(weedCartel);
    weedCartelPSPrint = test(weedCartelPS);
    weedBaronPrint = test(weedBaron);
    weedBaronPSPrint = test(weedBaronPS);
}, 10);

function test(labelValue) {

    let x = Number(labelValue);
    return x >= 1.0e+60
        ? (x / 1.0e+60).toFixed(1) + "PP"
        : x >= 1.0e+57
            ? (x / 1.0e+57).toFixed(1) + "OO"
            : x >= 1.0e+54
                ? (x / 1.0e+54).toFixed(1) + "NN"
                : x >= 1.0e+51
                    ? (x / 1.0e+51).toFixed(1) + "MM"
                    : x >= 1.0e+48
                        ? (x / 1.0e+48).toFixed(1) + "LL"
                        : x >= 1.0e+45
                            ? (x / 1.0e+45).toFixed(1) + "KK"
                            : x >= 1.0e+42
                                ? (x / 1.0e+42).toFixed(1) + "JJ"
                                : x >= 1.0e+39
                                    ? (x / 1.0e+39).toFixed(1) + "II"
                                    : x >= 1.0e+36
                                        ? (x / 1.0e+36).toFixed(1) + "HH"
                                        : x >= 1.0e+33
                                            ? (x / 1.0e+33).toFixed(1) + "GG"
                                            : x >= 1.0e+30
                                                ? (x / 1.0e+30).toFixed(1) + "FF"
                                                : x >= 1.0e+27
                                                    ? (x / 1.0e+27).toFixed(1) + "EE"
                                                    : x >= 1.0e+24
                                                        ? (x / 1.0e+24).toFixed(1) + "DD"
                                                        : x >= 1.0e+21
                                                            ? (x / 1.0e+21).toFixed(1) + "CC"
                                                            : x >= 1.0e+18
                                                                ? (x / 1.0e+18).toFixed(1) + "BB"
                                                                : x >= 1.0e+15
                                                                    ? (x / 1.0e+15).toFixed(1) + "AA"
                                                                    : x >= 1.0e+12
                                                                        ? (x / 1.0e+12).toFixed(1) + "T"
                                                                        : x >= 1.0e+9
                                                                            ? (x / 1.0e+9).toFixed(1) + "B"
                                                                            : x >= 1.0e+6
                                                                                ? (x / 1.0e+6).toFixed(1) + "M"
                                                                                : x >= 1.0e+3
                                                                                    ? (x / 1.0e+3).toFixed(1) + "K"
                                                                                    : x;

}