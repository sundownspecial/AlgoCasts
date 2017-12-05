// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str) {
    var strArray = str.split('');
    var strArrayRev = [];
    for (i = strArray.length-1; i >=0; i--) {
      strArrayRev.push(strArray[i]);
    }
    return strArrayRev.join('');
}

module.exports = reverse;
