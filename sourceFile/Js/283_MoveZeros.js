/*
 * @Author: AlanGolphi
 * @Date: 2021-03-27 18:09:31
 * @LastEditTime: 2021-03-27 18:16:26
 */
function moveZeros(array) {
    let j = 0;
    let len = array.length;

    for (let i = 0; i < len; ++i) {
        if (array[i] != 0) {
            array[j] = array[i];
            if (i != j) {
                array[i] = 0;
            }
            j++;
        }
    }
    return array;
}

let test = [0,1,0,3,6,0,8,0,0];
console.log(test);
console.log(moveZeros(test));