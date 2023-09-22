# medicalDataSeedProject

Hello friends. Project basically does the following:

* Randomly creates seed data that accepts coordinates in a world with ranges of -10, 10 for the x-axis and -10, 10 for the y-axis.
* Assume each coordinate can hold a maximum of one Central Fill facility.
* Each Central Fill facility has a unique numeric identifier (e.g., 001, 002, 003).
* Each central fill facility has different medications (A, B, C) as Inventory.
* Each medication has a non-zero price, expressed in USD. Ex: Medication A at Central Fill 001 costs $30.50
* The distance between two points should be computed as the Manhattan Distance. //todo
* //todo: randomly generate each medication and choose the cheapest
* Accepts coordinate points and returns list of 3 closest facilities, along with the cheapest medication price for each central fill.

Assumptions made:
* There would be not more than 100 central fill location data points since my identifier naming logic only works for 1-99.
* 

I might change the program if I needed to support multiple central fills at the same location by...

I would change the program if I were working with a much larger world size by...
