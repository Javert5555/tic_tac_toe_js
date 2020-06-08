window.onload = () => {
    let squares = document.getElementsByTagName("td");
    res = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    winInd = [
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0,] [2,1], [2,2]],
        [[0,0,] [1,0], [2,0]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        [[2,0], [2,1], [0,2]],
        [[0,0], [1,1], [2,2]]
    ];
    for(let i = 0; i < squares.length; i++){
        if(i == 0 || i%2==0) {
            squares[i].onclick = setSymbolX;
        }
        else{
            squares[i].onclick = setSymbolO;
        }
    }
};

let setSymbolX = (eventObj) => {
    let square = eventObj.target;
    square.innerHTML = "X";
    let currentId = square.id;
    let currentIndexArr = currentId.split("");
    let index0 = currentIndexArr[0];
    let index1 = currentIndexArr[1];
    res[index0][index1] = "X";
    console.log(res);
};

let setSymbolO = (eventObj) => {
    let square = eventObj.target;
    square.innerHTML = "O";
    let currentId = square.id;
    let currentIndexArr = currentId.split("");
    let index0 = currentIndexArr[0];
    let index1 = currentIndexArr[1];
    res[index0][index1] = "O";
    console.log(res);
};

let checkResult = (resArr, winArr) => {
    winArr.forEach((value, index) =>{
        let variable1, variable2, variable3;
        value.forEach((currentVaule, currentIndex) =>{
            let index0 = currentVaule[0];
            let index1 = currentVaule[1];
            variable1 = resArr[index0][index1];
    });
    });
};
