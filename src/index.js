/**
 * Check whether the value is undefined or not.
 * Note: null !== undefined
 *
 * @param  {Mixed} val
 * @return {Boolean}
 */
function isUndefined(val) {
	return val === undefined;
}

/**
 * Is `val` null | undefined?
 *
 * @param  {Mixed} val
 * @return {Boolean}
 */
function isNull(val) {
	// null == undefined but not (null === undefined)
	return val == null;
}

/**
 * Is `val` an object?
 *
 * @param  {Mixed} val
 * @return {Boolean}
 */
function isObject(val) {
	return typeof val === "object";
}

/**
 * Export `isUndefined`
 *
 * @type {Function}
 *
 * Export `isNull`
 *
 * @type {Function}
 *
 * Export `isObject`
 *
 * @type {Function}
 */
module.exports = {
	isUndefined: isUndefined,
	isNull: isNull,
	isObject: isObject,
};
