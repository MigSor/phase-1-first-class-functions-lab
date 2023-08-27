// Code your solution in this file!
const returnFirstTwoDrivers = (driversArray) => {
  return driversArray.slice(0, 2);
};

const returnLastTwoDrivers = (driversArray) => {
  return driversArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) => {
  return function () {
    return fare * 5;
  };
};

const fareDoubler = (fare) => {
  return fare * 2;
};

const fareTripler = (fare) => {
  return fare * 3;
};

function selectDifferentDrivers(arrayOfDrivers, func) {
  if (func === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
  }
  if (func === returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrayOfDrivers);
  }
}
