class Solution {
    pattern8(n) {
        for ( let i= 0; i <= n-1; i ++ ) {
            for ( let j = 0; j < i; j++) {
                process.stdout.write(" ");
            }
            for ( let k = 0; k < (2*n-1)-(2*i) ; k++ ){
                process.stdout.write ("*");
            }
        console.log()
        }
    }
}

const pattern = new Solution();
pattern.pattern8(12)