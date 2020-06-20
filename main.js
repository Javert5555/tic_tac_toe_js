// window.onload = () => {
//     let squares = document.getElementsByTagName("td");
//     res = [
//         ["", "", ""],
//         ["", "", ""],
//         ["", "", ""]
//     ];
//     winInd = [
//         [[0,0], [0,1], [0,2]],
//         [[1,0], [1,1], [1,2]],
//         [[2,0,] [2,1], [2,2]],
//         [[0,0,] [1,0], [2,0]],
//         [[1,0], [1,1], [1,2]],
//         [[2,0], [2,1], [2,2]],
//         [[2,0], [2,1], [0,2]],
//         [[0,0], [1,1], [2,2]]
//     ];
//     for(let i = 0; i < squares.length; i++){
//         if(i == 0 || i%2==0) {
//             squares[i].onclick = setSymbolX;
//         }
//         else{
//             squares[i].onclick = setSymbolO;
//         }
//     }
// };

// let checkResult = (resArr, winArr) => {
//     winArr.forEach((value, index) =>{
//         let variable1, variable2, variable3;
//         value.forEach((currentVaule, currentIndex) =>{
//             let index0 = currentVaule[0];
//             let index1 = currentVaule[1];
//             variable1 = resArr[index0][index1];
//     });
//     });
// };
let arr4 = [1,2,3];
let arr5 = [1, ,3];
function equalArr(arr1,arr2) {
    for(let i =0,len= arr1.length;i<len;i++){
        console.log(i);
        if(!arr1[i] && arr2[i]) return false;
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }

    return true;

}
function Game (res, winInd) {
    this.res = res;
    this.winInd = winInd;
}

Game.prototype.checkResult = function () {
    console.log('this.res',this.res);
    console.log(' this.winInd',this.winInd);
    for (let key in this.res) {
        console.log('this.res',this.res);
        console.log('this.res',this.res);
        if (this.res[key] == this.winInd[key]) {
            console.log("its true");
        }
    }
}

let user = new Game([[1,2,3]], [[1,2,3]]);

user.checkResult();


// let cont = document.getElementsByTagName('td');
//
// let xOrO = newFun(event);
//
// for(let i = 0; i < cont.length; i++){
//     cont[i].onclick = xOrO;
// }
//
// function newFun () {
//     let j = true;
//     return function () {
//         if (j){
//             this.innerHTML = "X";
//             j = !j;
//         }
//         else {
//             this.innerHTML = "O";
//             j = !j;
//         }
//     };
// }
