// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    if (location < 42) return 42 - location;
    if (location > 42) return location - 42;
    return 0;
}

function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
    if (start < end) return (end - start) * 264;
    if (start > end) return (start - end) * 264;
    return 0;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    const chargedDistance = distance - 400;
    if (distance > 2500) return 'cannot travel that far';
    if (distance <= 400) return 0;
    if (distance > 400 && distance <= 2000) return chargedDistance * .02;
    return 25;
}