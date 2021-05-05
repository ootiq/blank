const { isUndefined, isNull, isObject } = require("../src");

// isUndefined?
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

	test(`isUndefined? ${element}`, () => {
		expect(isUndefined(element[0])).toBe(element[1]);
	});
}

// isNull?
test("isNull? undefined", () => {
	expect(isNull(undefined)).toBe(true);
});

// isObject?
test("isObject? {}", () => {
	expect(isObject({})).toBe(true);
});
