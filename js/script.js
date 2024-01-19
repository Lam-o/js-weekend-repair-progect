const button = document.querySelector ("button");
const repairList = document.querySelector (".need-repair");

const createVehicle = function (type, numWheels, color) {
    const vehicle = {};
    vehicle.type = type;
    vehicle.numWheels = numWheels;
    vehicle.color = color;

    return vehicle;
}

const car = createVehicle ("car",4,"blue");
const bike = createVehicle ("bike",2,"red");
const skateboard = createVehicle ("skateboard",4,"black");

const myVehicles = [car,bike,skateboard];

for (let vehicle of myVehicles) {
    for (let key in vehicle) {
        console.log(key,vehicle[key]);
    }
}

bike.needsRepair = true;
skateboard.needsRepair = true;
car.needsRepair = true;

//add event listener and clear list before populating again
button.addEventListener ("click", function () {
    repairList.innerHTML = "";

//the repair list
const vehicleRepairList = myVehicles.filter (function(vehicle) {
    return vehicle.needsRepair === true;
});

for (let vehicle of vehicleRepairList) {
    let li = document.createElement ("li");
    li.innerHTML = `MY <span> ${vehicle.type} </span> needs some ❤️`;
    repairList.append(li);
}
});


