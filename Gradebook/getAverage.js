//Create a function getAverage that takes an array of scores, and returns the average

function getAverage(scores) {
    let sum = 0
    for (let x = 0; x < scores.length; x++) {
      sum += scores[x];
    }
    return (sum / scores.length)
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

  