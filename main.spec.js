import * as MainFunctions from './main';

test('capitalize String', () => {
	expect(MainFunctions.capatalize('hello world')).toBe('HELLO WORLD');
});
test('reverse String', () => {
	expect(MainFunctions.reverseString('hello world')).toBe('dlrow olleh');
});

describe('Calculator', () => {
	test('add two number', () => {
		expect(MainFunctions.calculator.add(1, 2)).toBe(3);
	});
	test('subtract two number', () => {
		expect(MainFunctions.calculator.subtract(5, 2)).toBe(3);
	});
	test('devide two number', () => {
		expect(MainFunctions.calculator.devide(9, 3)).toBe(3);
	});
	test('multiply two number', () => {
		expect(MainFunctions.calculator.multiply(3, 2)).toBe(6);
	});
});

describe('CaesarCipher', () => {
	test('simple cipher test', () => {
		expect(MainFunctions.caesarCipher('xyz', 3)).toBe('abc');
	});
	test('negativ shift test', () => {
		expect(MainFunctions.caesarCipher('abc', -3)).toBe('xyz');
	});
	test('case preservation test', () => {
		expect(MainFunctions.caesarCipher('HeLLo', 3)).toBe('KhOOr');
	});
	test('punctiation test', () => {
		expect(MainFunctions.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
	});
});

test('analyze Array', () => {
	expect(MainFunctions.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
