const prompt=require("prompt-sync")({sigint:true});


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

      // Create medications A,B,C each with varying prices
      const medications = [
        {
          name: 'Medication A',
          price: (Math.random() * 100).toFixed(2),
        },
        {
          name: 'Medication B',
          price: (Math.random() * 100).toFixed(2),
        },
        {
          name: 'Medication C',
          price: (Math.random() * 100).toFixed(2),
        },
      ];
  
      seedData.push({ identifier, x, y, medications });
    }

    return seedData;
  }
  
  // Number of data points
  const numberOfPoints = 10;
  const seedData = generateRandomSeedData(numberOfPoints);

  // Function calculates distance between two coordinate points using manhattan distance
  function calculateDistance(x1, y1, x2, y2) {
    const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    return distance;
  }

  // Function filters for closest 3 points to x,y parameters from user input coordinates
  function findClosestCentralFill(x,y) {
    let fillCentersList = [];

    for (let i = 0; i < seedData.length; i++)
    {
      let distance = "Distance " + calculateDistance(x,y, seedData[i].x, seedData[i].y).toFixed(0);
      let identifier = "Central Fill " + seedData[i].identifier;

      // Sort medications by price in ascending order
      let sortedMedications = seedData[i].medications.sort((a, b) => a.price - b.price);
      let cheapestMedName = sortedMedications[0].name;
      let cheapestMedPrice = '$' + sortedMedications[0].price;

      fillCentersList.push({ identifier, cheapestMedName, cheapestMedPrice, distance });
    }

    let sortedFillCenters = fillCentersList.sort((r1, r2) => (r1.distance > r2.distance) ? 1 : (r1.distance < r2.distance) ? -1 : 0);

    return sortedFillCenters.slice(0, 3);
  }

  // Accepts user input of location coordinates
  let xInput, yInput;

  do {
    xInput = prompt("Please enter an x-coordinate (ranging -10, 10):");
    xInput = parseFloat(xInput); // Convert the user input to a floating-point number
  
    yInput = prompt("Please enter an y-coordinate (ranging -10, 10):");
    yInput = parseFloat(yInput); // Convert the user input to a floating-point number
  
    // Check if both x and y coordinates are numbers and fall within the desired range
    if (xInput >= -10 && xInput <= 10 && yInput >= -10 && yInput <= 10) {
      break;
    } else {
      console.log("Invalid input. Enter x and y coordinates as numbers between -10 and 10.");
    }
  } while (true);

  console.log("Closest central fill to " + xInput + "," + yInput + ":");
  console.log(findClosestCentralFill(xInput,yInput));
