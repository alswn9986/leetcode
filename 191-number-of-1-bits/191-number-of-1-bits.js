/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let result;
    // result = solution1(n);
    result = solution2(n);
    return result;
};

// 이진수 변환 함수 사용
var solution1 = function(n) {
    let input = n.toString(2).split('');
    return input.filter(x => x == '1').length;
}

// 이진수 변환 직접 구현
var solution2 = function(n) {
    let binary = '';
    while(n > 0) {
        binary = (n % 2) + '' + binary;
        n = parseInt(n / 2);
    }
    
    return binary.split('').filter(x => x == '1').length;
}