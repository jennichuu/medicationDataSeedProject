// Function generates random seed data 
function generateRandomSeedData(numPoints) {
    const seedData = [];
  
    for (let i = 1; i <= numPoints; i++) {
      // creates random x,y coordinates between -10 and 10
      const x = Math.random() * 20 - 10;
      const y = Math.random() * 20 - 10;
      let identifier = "";
      if (i >= 10)
      {
        identifier = "0"+i; // Unique numeric identifier 001, 002, ...etc.
      }
      else 
      {
        identifier = "00"+i; // Unique numeric identifier 010, 011, ...etc.
      }
      const dollarAmount = Math.random() * 100; // Random dollar amount
      const letter = ['A', 'B', 'C'][Math.floor(Math.random() * 3)]; // Random medicine letter A, B, or C
  
      seedData.push({ identifier, x, y, dollarAmount, letter });
    }
    return seedData;
  }
  
  // Number of data points
  const numberOfPoints = 100;
  const seedData = generateRandomSeedData(numberOfPoints);

  // Function calculates distance between two coordinate points
  function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  }

  // Function filters for closest 3 points to x,y parameters
  function findClosestCentralFill(x,y) {
    let fillCentersList = [];

    for (let i = 0; i < seedData.length; i++)
    {
      let distance = "Distance " + calculateDistance(x,y, seedData[i].x, seedData[i].y).toFixed(0);
      let identifier = "Central Fill " + seedData[i].identifier;
      let amount = "$" + seedData[i].dollarAmount.toFixed(2);
      let medication = "Medication " + seedData[i].letter;

      fillCentersList.push({ identifier, amount, medication, distance });
    }

    let sortedFillCenters = fillCentersList.sort((r1, r2) => (r1.distance > r2.distance) ? 1 : (r1.distance < r2.distance) ? -1 : 0);

    return sortedFillCenters.slice(0, 3);
  }

  // Final output with input of (4,2)
  console.log("Closest central fill to 4,2");
  console.log(findClosestCentralFill(4,2));