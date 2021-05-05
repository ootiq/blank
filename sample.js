const sampleJson = {};

cases = [
	(sampleJson.hello, false),
	(sampleJson.world, true),
	("true", false),
	(null, false),
	(undefined, true),
];

const t = new Date().getTime();

cases.map((i) => {
	console.log(i);
});
console.log(`map: ${new Date().getTime() - t}`);

const n = new Date().getTime();
for (let index = 0; index < cases.length; index++) {
	console.log(cases[index]);
}
console.log(`for: ${new Date().getTime() - n}`);
