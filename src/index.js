/**
 * Check whether the value is undefined or not.
 * Note: null !== undefined
 *
 * @param  {Mixed} val
 * @return {Boolean}
 */
function isUndefined(val) {
	if (val === undefined) return true;
	return false;
}

module.exports.isUndefined = isUndefined;
