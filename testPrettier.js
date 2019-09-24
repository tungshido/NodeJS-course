/* eslint-disable no-extend-native */
if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== 'function') {
			throw new TypeError(
				'Function.prototype.bind - what is trying to be bound is not callable',
			);
		}
		const aArgs = Array.prototype.slice.call(arguments, 1);
		const fToBind = this;
		const fNOP = function() {};
		const fBound = function() {
			return fToBind.apply(
				this instanceof fNOP ? this : oThis,
				aArgs.concat(Array.prototype.slice.call(arguments)),
			);
		};
		if (this.prototype) {
			fNOP.prototype = this.prototype;
		}
		fBound.prototype = new fNOP();
		return fBound;
	};
}
