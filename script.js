moves = 0;
endgame = false;
winner = null
reason = ''
x = document.getElementsByClassName("grid-container");
y = document.getElementsByClassName("header");

y[0].innerHTML = `<span class='circle1'></span> <p>red turn</p>`;
no_of_rows = 6
no_of_columns = 7
let squares = [];
let arrowButtons = [];

var turn = 0;
//globals


function checkwinner(row, column){
    winner = null
    north = 0
    south = 0
    east = 0
    west = 0
    north_east = 0
    north_west = 0
    south_east = 0
    south_west = 0
    str1 = el.id;
    len = str1.length;
    reqnum = str1.substring(3, len);
    pos = String(reqnum)
    row = Math.floor(pos/10)
    column = pos % 10
    //so row, column is where we are right now
    console.log(`confirm ${row}, ${column}`);
    //north calculation
    let i = row;
    let j = column;
    while(1){
        i--;
        if(i < 0) break;
        northel = document.getElementById("box" + String(i*10 + j));
        if(northel.style.backgroundColor == el.style.backgroundColor){
            north++;
        }
        else break;
    }
    i = row
    j = column
    while(1){
        i++;
        if(i > 5) break;
        southel = document.getElementById("box" + String(i*10 + j));
        if(southel.style.backgroundColor == el.style.backgroundColor){
            south++;
        }
        else break;
    }
    if(north + south + 1 >= 4){
        endgame = true;
        winner = 1 - turn;
    }

    i = row;
    j = column;
    while(1){
        j--;
        if(j < 0) break;
        westel = document.getElementById("box" + String(i*10 + j));
        if(westel.style.backgroundColor == el.style.backgroundColor){
            west++;
        }
        else break;
    }
    i = row;
    j = column;
    while(1){
        j++;
        if(j > 6) break;
        eastel = document.getElementById("box" + String(i*10 + j));
        if(eastel.style.backgroundColor == el.style.backgroundColor){
            east++;
        }
        else break;
    }
    if(west + east + 1 >= 4){
        endgame = true;
        winner = 1 - turn;
    }
    i = row;
    j = column;
    while(1){
        i++;
        j++;
        if(i > 5 || j > 6) break;
        southeastel = document.getElementById("box" + String(i*10 + j));
        if(southeastel.style.backgroundColor == el.style.backgroundColor){
            south_east++;
        }
        else break;
    }
    i = row;
    j = column;
    while(1){
        i--;
        j--;
        if(i <0 || j < 0){
            break;
        }
        northwestel = document.getElementById("box" + String(i*10 + j));
        if(northwestel.style.backgroundColor == el.style.backgroundColor){
            north_west++;
        }
        else break;
    }
    if(south_east + north_west + 1 >=4 ){
        endgame = true;
        winner = 1 - turn;
    }
    i = row;
    j=column;
    while(1){
        i--;
        j++;
        if(i < 0 || j > 6) break;
        northeastel = document.getElementById("box" + String(i * 10 + j));
        if(northeastel.style.backgroundColor == el.style.backgroundColor){
            north_east++;
        }
        else break;
    }
    i = row;
    j = column;
    while(1){
        i++;
        j--;
        if(j < 0 || i > 5) break;
        southwestel = document.getElementById("box" + String(i * 10  +j));
        if(southwestel.style.backgroundColor == el.style.backgroundColor){
            south_west++;
        }
        else break;
    }
    if(winner != null){
        console.log('winner is ' + String(1 - turn));
        if(winner == 0){
            y[0].innerHTML = `<p>winner is<p> <span class='circle1'></span>`
            return 'red';
        }
        else{
            y[0].innerHTML = `<p>winner is<p> <span class='circle2'></span>`
            return 'yellow'
        }    
    }
    else if(moves == 42){
        endgame = 'draw';
        y[0].innerHTML = `<p>draw!!, nodbody wins<\p>`
        return 'draw';
    }
    else{
        return 'normal';
    }
}



function play(column){
    if(endgame == true) {
        return;
    }
    else if(endgame == 'draw'){
        return;
    }
    let circ = document.getElementById("column"+String(column));
    flag = false;
    el = 0;
    row = 5;
    for(row = 5; row >= 0; row--){
        el = document.getElementById("box"+String(row*10 + column));
        if((el.style.backgroundColor != 'red') && (el.style.backgroundColor != 'yellow')){
            flag = true;
            break;
        }
    }
    if(flag == false) {
        console.log('whole column is filled up, I can\'t do anything');
        return;
    }
    if(turn == 0){
        el.style.backgroundColor = 'red';
        turn = 1 - turn;
        y[0].innerHTML = `<span class='circle2'></span> <p>yellow turn</p>`;
    }
    else{
        el.style.backgroundColor = 'yellow';
        turn = 1- turn;
        y[0].innerHTML = `<span class='circle1'></span> <p>red turn</p>`;
    }
    //now that someone has inserted let's check if there is a winner
    //we will check up down left right and diagonally also 
    //that makes a total of 8 checks!!!

    console.log(`placed at row: ${row} and column: ${column}`);
    // 
    ret = checkwinner(row, column);
    if(ret == 'red'){
        y[0].innerHTML = `<p>winner is<p> <span class='circle1'></span>`
    }
    else if(ret == 'yellow'){
        y[0].innerHTML = `<p>winner is<p> <span class='circle2'></span>`
    }
    else if(ret == 'draw'){
        y[0].innerHTML = `<p>draw!!, nodbody wins<\p>`;
    }
    else{
        ;
    }
}   







for(let i=0; i<no_of_columns; i++){
    const arrowdiv = document.createElement("div");
    arrowdiv.id = "column" + String(i);
    arrowdiv.className = "down-arrow";
    arrowdiv.style.height = 0;
    arrowdiv.style.width = 0;
    arrowdiv.style.borderLeftColor = "transparent";
    arrowdiv.style.borderRightColor = "transparent";
    arrowdiv.style.borderTopColor = 'red';
    // arrowdiv.style.borderBottomColor = 'transparent';
    arrowdiv.style.borderWidth = '20px';
    arrowdiv.style.borderStyle = 'solid';
    arrowdiv.style.alignSelf = 'center';
    arrowdiv.style.justifySelf = 'center';
    arrowdiv.addEventListener("click", () =>{
        play(i);
    });
    x[0].appendChild(arrowdiv);
}

for (let i=0; i<no_of_rows; i++){
  for(let j =0; j<no_of_columns; j++){
    squares.push(i*10 + j);//to regain i and j we can use quotient and remainder when divided by 10
    const divchild = document.createElement("div");
    divchild.style.borderRadius = '50%';
    divchild.style.backgroundColor = 'green';
    divchild.id = "box"+ String(i*10 + j);
    x[0].appendChild(divchild);
    divchild.style.height = '100px';
    divchild.style.width = '100px';
    divchild.style.borderColor = 'black';
    divchild.style.borderStyle= 'solid';
    divchild.style.borderWidth = '2px';
    divchild.style.alignSelf = 'center';
    divchild.style.justifySelf = 'center';
  }
}





