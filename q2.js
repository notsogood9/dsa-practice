class Solution {
    pattern2(n) {
        //creating first loop for outer iteration
        for ( let i= 0; i < n; i ++ ) {
            //creating second one for inner iteration
            for ( let j = 0; j <= i; j ++ ) {
                process.stdout.write("*");
            }
        console.log();
        }
    }
}
const pattern = new Solution();
pattern.pattern2(5)