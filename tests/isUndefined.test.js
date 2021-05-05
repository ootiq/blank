const { isUndefined } = require("../src");

sampleJson = {
	hello: 1,
};

cases = [
	[sampleJson.hello, false],
	[sampleJson.world, true],
	["true", false],
	[null, false],
	[undefined, true],
];

for (let index = 0; index < cases.length; index++) {
	const element = cases[index];

	test(`${element}`, () => {
		expect(isUndefined(element[0])).toBe(element[1]);
	});
}
