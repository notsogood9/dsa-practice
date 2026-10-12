class Solution {
    pattern5(n) {
        for ( let i = 0; i < n; i ++ ){
            for (let j = 0; j < n-i ; j ++ ){
                process.stdout.write("*");
            }
        console.log();
        }
    }
}
const pattern = new Solution();
pattern.pattern5(6)