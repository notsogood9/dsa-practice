class Solution {
    pattern1(n) {
        for ( let i=0; i<n; i++ ) {
            for( let j=0; j<n; j++ ) {
                process.stdout.write("*");
            }
            console.log();
        }
    }
}

const pattern = new Solution();
pattern.pattern1(5)