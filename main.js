function capatalize(string) {
	return string.toUpperCase();
}

function reverseString(string) {
	return string.split('').reverse().join('');
}

const calculator = {
	add: (num1, num2) => {
		return num1 + num2;
	},
	subtract: (num1, num2) => {
		return num1 - num2;
	},
	devide: (num1, num2) => {
		if (num1 === 0) {
			throw new Error("That ain't mathin'");
		}
		return num1 / num2;
	},
	multiply: (num1, num2) => {
		return num1 * num2;
	},
};

function caesarCipher(str, shift) {
	return str
		.split('')
		.map((char) => {
			const code = char.charCodeAt(0);

			const normalizedShift = ((shift % 26) + 26) % 26;

			if (code >= 65 && code <= 90) {
				return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
			} else if (code >= 97 && code <= 122) {
				return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
			}
			return char;
		})
		.join('');
}

function analyzeArray(array) {
	return {
		average: array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length,
		min: Math.min(...array),
		max: Math.max(...array),
		length: array.length,
	};
}

export { capatalize, reverseString, calculator, caesarCipher, analyzeArray };
