export const utilService = {
  makeId,
  getRandomInt,
  loadFromSessionStorage,
  saveToSessionStorage,
  removeFromSessionStorage,
};

function makeId(length = 5) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function loadFromSessionStorage(key) {
  var val = sessionStorage.getItem(key);
  return val ? JSON.parse(val) : null;
}

function saveToSessionStorage(key, val) {
  sessionStorage[key] = JSON.stringify(val);
}
function removeFromSessionStorage(key) {
  sessionStorage.removeItem(key);
}
