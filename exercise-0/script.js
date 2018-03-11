const fs = require('fs');

var count = 0;

fs.readFile('frankenstein.txt', 'utf8', (err, data) => {
  const words = data.split(' ');
  for(var i = 0; i < words.length; i++) {
    if (words[i].includes('monster')) {
      count++;
    }
  }
  console.log(count);
});

// Using readFileSync
var syncCount = 0;
const syncData = fs.readFileSync('frankenstein.txt', 'utf8');
const syncWords = syncData.split(' ');
for(var i = 0; i < syncWords.length; i++) {
  if (syncWords[i].includes('monster')) {
    syncCount++;
  }
}
console.log(syncCount);
