
class Elo {
    static calculate(a: number, b: number, score: number, k: number) {
        let result = b - a;
        result = result / 400;
        result = Math.pow(10, result) + 1;
        result = 1 / result;
    	return k * (score - result);
    }
}