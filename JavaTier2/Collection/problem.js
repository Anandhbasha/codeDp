// Given a 2D grid of size m x n and an integer k. 
// You need to shift the grid k times. 
// In one shift operation: Element at grid[i][j] moves to grid[i][j + 1]. 
// Element at grid[i][n - 1] moves to grid[i + 1][0]. 
// Element at grid[m - 1][n - 1] moves to grid[0][0]. 
// Return the 2D grid after applying shift operation k times.


const finalGrid = (grid,k)=>{
    // number of rows =3
    let totalRow = grid.length;
    // number of col =3
    let totalCol = grid[0].length
    // total no of Elements
    let total = totalRow*totalRow
    // 9
    // reduce extra shift
    k = k%total

    
    // create res array
    let res = Array.from({length:totalRow},()=>Array(totalCol))
    // [[0 0 0]
    // [0 0 0]
    // [0 0 0]]
    for(let x=0;x<totalRow;x++){
        for(let y=0;y<totalCol;y++){
            // 2d is convert to 1D
            let currIndex = x*totalCol+y
            // 0*3+0 ->0
            // 0*3+1 ->1
            // 0*3+2 ->2
            // 0->0,1,2
            // find new shifting index
            let newIndex = (currIndex+k)%total
            let newRow = Math.floor(newIndex/totalCol)
            let newCol = newIndex%totalCol
            res[newRow][newCol] = grid[x][y]
        }
    }
    return res

}

let grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let k =8;

let ans = finalGrid(grid,k)
console.log(ans);
