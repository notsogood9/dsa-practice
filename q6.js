class Solution {
    pattern6(n) {
        for ( let i=0; i<n; i++ ) {
            for ( let j=1; j<=n-i; j++) {
                process.stdout.write(j.toString())
            }
        console.log()
        }
    }
}
const pattern = new Solution();
pattern.pattern6(3)