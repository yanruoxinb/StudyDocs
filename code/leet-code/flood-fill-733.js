
/**
 * https://leetcode-cn.com/problems/flood-fill/submissions/
 * leet-code 733题
 * 图像渲染问题
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

 var floodFill = function(image, sr, sc, newColor) {
     dfs(image, sr, sc, newColor, image[sr][sc]);
     return image;
    
 };
 var dfs = (image,i,j,newColor,val)=>{
     if(i<0 || j<0||i>=image.length||j>=image[0].length || image[i][j]!=val||image[i][j]===newColor){
        
     }else{
         let value = image[i][j];
         image[i][j] = newColor;
         dfs(image,i,j-1,newColor,value);
         dfs(image,i,j+1,newColor,value);
         dfs(image,i-1,j,newColor,value);
         dfs(image,i+1,j,newColor,value);
     }
    //  return image;
 }

 console.log(floodFill( [[1,1,1],[1,1,0],[1,0,1]], 1,1,2))