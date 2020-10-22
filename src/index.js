module.exports = function towelSort (matrix) {
    var res = [];
    var temp = [];
    if((typeof matrix === "undefined") || (matrix.length < 1)){
        res = [];
    } else {
        for(let i = 0; i < matrix.length; i ++){
            if(matrix[i + 1] !== undefined){
                res.push(matrix[i]);
                i++;
                temp = matrix[i];
                temp.reverse();
                res.push(temp);
            } else {
                res.push(matrix[i]);
            }
        }
        res = res.reduce(function(a, b) {
            return a.concat(b);
        });
    }

  return res;
};
