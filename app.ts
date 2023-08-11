import Max6675 from "./index"
const CS = 27;
const SCK = 17;
const SO = 22;//[25, 12, 16, 20, 21];
const UNIT = 1;
const max6675 = new Max6675();
max6675.setPin(CS, SCK, SO, UNIT);

(async () => {
	while (true) {
		const { temp, unit } = await max6675.readTemp();
		console.log("Value of 'temp':", temp);
		//console.log(`${new Date()}:${temp!.map(item => item + unit)}`);
		if (temp!.length)
		{
			console.log("loop");
			console.log(`${new Date()}:${temp!.map(item => item + unit)}`);
		}	
		await max6675.sleep(2000);
	}
})();
