/**
 * Created by longyichuan on 15/10/19.
 */
/**
 * cordova is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 */

var exec = require("cordova/exec");

/**
 * Constructor.
 *
 * @returns {Minimalbarcode}
 */
function Minimalbarcode() {};

/**
 * Read code from scanner.
 *
 * @param {Function} successCallback This function will recieve a result object: {
 *        text : '12345-mock',    // The code that was scanned.
 *        format : 'FORMAT_NAME', // Code format.
 *        cancelled : true/false, // Was canceled.
 *    }
 * @param {Function} errorCallback
 */
Minimalbarcode.prototype.scan = function (successCallback, errorCallback, config) {

	if(config instanceof Array) {
		// do nothing
	} else {
		if(typeof(config) === 'object') {
			config = [ config ];
		} else {
			config = [];
		}
	}

	if (errorCallback == null) {
		errorCallback = function () {
		};
	}

	if (typeof errorCallback != "function") {
		console.log("二维码扫描插件调用异常,errorCallback必须是function");
		return;
	}

	if (typeof successCallback != "function") {
		console.log("二维码扫描插件调用异常,successCallback必须是function");
		return;
	}

	exec(successCallback, errorCallback, 'Minimalbarcode', 'scan', config);
};

var minimalbarcode = new Minimalbarcode();
module.exports = minimalbarcode;
