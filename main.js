
/*
* Проверяет на равенство все элементы переданного массива
*/
function allEqual(arr){
    return arr.every((item) =>{
        return item === arr[0] && (item === "X" || item === "O");
    })
}
function Game () {
    this.res = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    this.winInd = [
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        [[0,0], [1,0], [2,0]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        [[2,0], [2,1], [0,2]],
        [[0,0], [1,1], [2,2]]
    ];
}

Game.prototype.checkResult = function(){
    console.log('This',this);
    for (let item of this.winInd) {
        let arrForCheck =  [];
        for (let value of item) {
            console.log("this.res", this.res);
            arrForCheck.push(this.res[value[0]][value[1]]);
            console.log("arrForCheck", arrForCheck);
        }
        if (allEqual(arrForCheck) ) {
            return true;
        }
    }
    return false;
};
Game.prototype.setSymbol = function(currentId,symbol){
        let currentIndexArr = currentId.split("");
        let index0 = currentIndexArr[0];
        let index1 = currentIndexArr[1];
        this.res[index0][index1] = symbol;
        console.log(this.res);

}
Game.prototype.run = function(){
    let cont = document.getElementsByTagName('td');
    let xOrO = callBack(this);

    for(let i = 0; i < cont.length; i++){
        cont[i].onclick = xOrO;
    }

    function callBack (obj) {
        let j = true;

        return function () {
            console.log('this',this.id);
            if (j){
                this.innerHTML = "X";
                obj.setSymbol(this.id,'X');
                j = !j;
            }
            else {
                this.innerHTML = "O";
                obj.setSymbol(this.id,'O');
                j = !j;
            }
            // проверка после каждого клика на выигрышную комбинацию
            if(obj.checkResult()){
                alert('Победа');
                return;
            }
        };
    }

};

let user = new Game();

user.run();



