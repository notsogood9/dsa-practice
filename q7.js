class Solution {
    pattern7(n) {
        for ( let i = 1; i <= n; i++) {
            for ( let j=0 ; j <= (n-i)-1; j++ ) {
                process.stdout.write(" ");
            }
            for ( let k=1; k <= (2*i-1); k++) {
                process.stdout.write("*");
            }
        console.log();
        }
    }
}

const pattern = new Solution();
pattern.pattern7(12);