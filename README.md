# medicalDataSeedProject

Hello friends. Project basically does the following:

* Randomly creates seed data that accepts coordinates in a world with ranges of -10, 10 for the x-axis and -10, 10 for the y-axis.
* Assume each coordinate can hold a maximum of one Central Fill facility.
* Each Central Fill facility has a unique numeric identifier (e.g., 001, 002, 003).
* Each central fill facility has different medications (A, B, C) as Inventory.
* Each medication has a non-zero price, expressed in USD. Ex: Medication A at Central Fill 001 costs $30.50
* The distance between two points should be computed as the Manhattan Distance. 
* Accepts coordinate points and returns list of 3 closest facilities, along with the cheapest medication price for each central fill.

Assumptions made:
* There would be not more than 100 central fill location data points since my identifier naming logic only works for 1-99.
* Limit coordinate ranges user input to only accept ranges between -10 and 10 to fit within world ranges.

Final notes:

I would change the program if I needed to support multiple central fill facilities at the same location by creating an additional list of those same central fill locations outside of the current returned list of clolsest distance fill centers while still determining, in ascending order, the smallest distances from a user location. That additional list, call it "sameLocationFillList", would be then now be able to be supported since it will be alongside the current returning list.

I would change the program if I were working with a larger world size by firstly expanding the value of "numberOfPoints" to the updated larger value up to a certain size; however, if it is quite large, I would have created a scalable data structure to manage the information from each of the new additional fill centers. Another method of handling such large quanities of data points would be implementing cloud infrastructure for the program.
