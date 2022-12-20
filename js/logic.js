//Variables
function Item(name, cost, amount, value) {
    this.name = name;
    this.cost = cost;
    this.amount = amount;
    this.value = value;
}
//Items
var citizens = new Item(citizens, 150, 5);
var click = new Item(click, 800, 1);
var factory = new Item(factory, 5000, 0);
var farm = new Item(farm, 1000, 0, 0);
var garden = new Item(garden, 75, 0, 2);
var immigration = new Item(immigration, 5000, 0);
var land = new Item(land, 500, 10);
var soldiers = new Item(soldiers, 10000, 0);
var warehouse = new Item(warehouse, 2500, 0);
var workers = new Item(workers, 50, 0);




//Other variables
let allTimeScore = 0;
let food = 0;
let multiplier = 1.00;
let score = 0;
let year = 1800;


//Setting state of all expansions
document.getElementById("expansionOne").style.visibility="hidden";
document.getElementById("expansionTwo").style.visibility="hidden";
//Updates

function updateScore(amount) {
    score = score + (amount * multiplier);
    allTimeScore = allTimeScore + (amount * multiplier);
    document.getElementById("score").innerHTML = Math.round(score).toLocaleString();
    document.getElementById("alltimescore").innerHTML = (Math.round(allTimeScore)).toLocaleString();

}
function updateCitizens(amount) {
    citizens.amount = citizens.amount + amount;
    document.getElementById("citizens").innerHTML = citizens.amount;
}


function updateHappiness(amount) {
    multiplier = multiplier + amount;
    document.getElementById("happiness").innerHTML = Math.round(multiplier);
}
function updateFood(amount) {
    food = food + amount;
    document.getElementById("food").innerHTML = food;
}



//Buys

function buyWorker() {
    if (score >= workers.cost && citizens.amount > 0) {
        score = score - workers.cost;
        workers.amount = workers.amount + 1;
        citizens.amount = citizens.amount - 1;
        workers.cost = Math.round(workers.cost * 1.15)
        document.getElementById("score").innerHTML = Math.round(score).toLocaleString();
        document.getElementById("workerCost").innerHTML = workers.cost.toLocaleString();
        document.getElementById("citizens").innerHTML = citizens.amount;
        document.getElementById("workers").innerHTML = workers.amount;
    }

}
function buyCitizen() {
    if (score >= citizens.cost) {
        score = score - citizens.cost;
        citizens.amount = citizens.amount + 1;
        citizens.cost = Math.round(citizens.cost * 1.15)
        document.getElementById("citizens").innerHTML = citizens.amount;
        document.getElementById("citizenCost").innerHTML = citizens.cost.toLocaleString();
        document.getElementById("score").innerHTML = Math.round(score).toLocaleString();
    }
}
function buyWarehouse() {
    if (score >= warehouse.cost && citizens.amount >= 5) {
        score = score - warehouse.cost;
        warehouse.amount = warehouse.amount + 1;
        citizens.amount = citizens.amount - 5;
        warehouse.cost = Math.round(warehouse.cost * 1.35);
        multiplier = multiplier + .1;
        document.getElementById("score").innerHTML = Math.round(score).toLocaleString();
        document.getElementById("warehouseCost").innerHTML = warehouse.cost.toLocaleString();
        document.getElementById("citizens").innerHTML = citizens.amount.toLocaleString();
        document.getElementById("happiness").innerHTML = Math.round(multiplier);
        document.getElementById("warehouses").innerHTML = warehouse.amount;

    }

}
function buyFarm() {
    if (score >= farm.cost && land.amount >= 5) {
        score = score - farm.cost;
        land.amount = land.amount - 5;
        farm.amount = farm.amount + 1;
        farm.cost = Math.round(farm.cost * 1.35)
        document.getElementById("citizens").innerHTML = citizens.amount;
        document.getElementById("farmCost").innerHTML = farm.cost.toLocaleString();
        document.getElementById("score").innerHTML = Math.round(score).toLocaleString();
        document.getElementById("farms").innerHTML = farm.amount;
        document.getElementById("land").innerHTML = land.amount;
    }
}

function buyClick() {
    if (score >= click.cost) {
        click.amount = click.amount + 1;
        score = score - click.cost;
        click.cost = Math.round(click.cost * 1.25);
        document.getElementById("score").innerHTML = Math.round(score).toLocaleString();
        document.getElementById("clickCost").innerHTML = click.cost.toLocaleString();
        document.getElementById("click").onclick = function () { updateScore(click.amount)};

    }
}
function buyGarden() {
    if (score >= garden.cost && land.amount > 0) {
        garden.amount = garden.amount + 1;
        land.amount = land.amount - 1;
        score = score - garden.cost;
        garden.cost= Math.round(garden.cost * 1.15);
        document.getElementById("score").innerHTML = Math.round(score).toLocaleString();
        document.getElementById("gardenCost").innerHTML = garden.cost.toLocaleString();
        document.getElementById("gardens").innerHTML = garden.amount;
        document.getElementById("land").innerHTML = land.amount;

    }
}
function buyLand() {
    if (score >= land.cost) {
        land.amount++;
        score = score - land.cost;
        land.cost = Math.round(land.cost * 1.10);
        document.getElementById("score").innerHTML = Math.round(score).toLocaleString();
        document.getElementById("landCost").innerHTML = land.cost.toLocaleString();
        document.getElementById("land").innerHTML = land.amount;

    }
}

function buyFactory() {
    if (score >= factory.cost && citizens.amount >= 5 && land.amount >= 5) {
        score = score - factory.cost;
        land.amount = land.amount - 5;
        factory.amount = factory.amount + 1;
        citizens.amount = citizens.amount - 5;
        factory.cost = Math.round(factory.cost * 1.15)
        document.getElementById("score").innerHTML = Math.round(score).toLocaleString();
        document.getElementById("factoryCost").innerHTML = factory.cost.toLocaleString();
        document.getElementById("citizens").innerHTML = citizens.amount;
        document.getElementById("factories").innerHTML = factory.amount;
        document.getElementById("land").innerHTML = land.amount;
    }

}

function buyImmigration() {
    if (score >= immigration.cost) {
        score = score - immigration.cost;
        immigration.cost = (immigration.cost * 1.2);
        immigration.amount++;
        document.getElementById("score").innerHTML = Math.round(score).toLocaleString();
        document.getElementById("immigrationCost").innerHTML = immigration.cost.toLocaleString();

    }
}


//Garden
setInterval(function() {
    garden.value = garden.amount * 2;
    updateFood(garden.value);
}, 1000);
//Worker
setInterval(function() {
    if (food / workers.amount > 0) {
        food = food - workers.amount;
        updateScore(workers.amount);
    }
}, 1000);

setInterval(function() {
    if (food / (factory.amount * 5) > 0) {
        food = food - (factory.amount * 5);
        updateScore((factory.amount * 20));
    }
}, 1000);
//Farms
setInterval(function() {
    farm.value = farm.amount * 10;
    updateFood(farm.value);
}, 1000);
//Year counter
setInterval(function() {
    year = year + 1;
    document.getElementById("year").innerHTML = year;

}, 30000);
//Immigration
setInterval(function() {
    if (immigration.amount > 0) {
        updateCitizens(immigration.amount)
    }

}, 20000);



//Saving, loading, etc.
//Autosave
setInterval(function() {
    save();

}, 60000);
//Save
function save() {
    let saveSlot = {
        score: score,
        multiplier: multiplier,
        food: food,
        allTimeScore: allTimeScore,
        year: year,
        citizens: citizens,
        click: click,
        factory: factory,
        farm: farm,
        garden: garden,
        immigration: immigration,
        land: land,
        soldiers: soldiers,
        warehouse: warehouse,
        workers: workers

    };
    localStorage.setItem("saveSlot", JSON.stringify(saveSlot));
}

document.addEventListener("keydown", function(addEventListener) {
    if (event.ctrlKey && event.which == 83) {
        event.preventDefault();
        save();
    }
}, false);
//Load and startup
function load() {
    let gameSave = JSON.parse(localStorage.getItem("saveSlot"));
    if (typeof gameSave.score !== "undefined") score = gameSave.score;
    if (typeof gameSave.multiplier !== "undefined") multiplier = gameSave.multiplier;
    if (typeof gameSave.allTimeScore !== "undefined") allTimeScore = gameSave.allTimeScore;
}

window.onload = function() {
    load();
    document.getElementById("score").innerHTML = score;
    document.getElementById("happiness").innerHTML = Math.round(multiplier);
    document.getElementById("workerCost").innerHTML = workers.cost;
    document.getElementById("alltimescore").innerHTML = allTimeScore;
    document.getElementById("farmCost").innerHTML = farm.cost;
    document.getElementById("warehouseCost").innerHTML = warehouse.cost;
    document.getElementById("clickCost").innerHTML = click.cost;
    document.getElementById("click").onclick = function () { updateScore(click.amount)};

//Reset game
};
function reset() {
    if (confirm("Are you sure you want to reset?")) {
        saveSlot = {};
        localStorage.setItem("saveSlot", JSON.stringify(saveSlot));
        location.reload();
    }
}

//Unlocking and achievements
setInterval(function() {
    if (allTimeScore >= 1000) {
        document.getElementById("expansionOne").style.visibility="visible";
    }
    if (allTimeScore >= 10000) {
        document.getElementById("expansionTwo").style.visibility="visible";
    }
}, 3000);