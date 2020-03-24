
// Starting User input area
let playerOneName;
let playerTwoName;
let playerOneIcon = "";
let playerTwoIcon = "";
document.querySelector('.mainPage').style.display = 'none';
document.querySelector('.interInGame').onclick = () => {

    playerOneName = document.querySelector('#playerOneName').value;
    playerTwoName = document.querySelector('#playerTwoName').value;

    playerOneIcon = document.querySelector("#avatarPlayer1").value;
    playerTwoIcon = document.querySelector("#avatarPlayer2").value;

    if (playerOneIcon === playerTwoIcon) {
        alert('Avatar can not be same ');
    }

    if (playerOneName === '' || playerTwoName === '') {
        alert('Please Enter Name');
    }

    if (playerOneName === playerTwoName && playerOneName.length > 3 && playerTwoName.length > 3) {
        alert('Name can not be same');
    }
    if ((playerOneName.length <= 3 || playerTwoName.length <= 3) && playerOneName !== '' && playerTwoName !== '') {
        alert('Name length should be greater then 3  ');
    }


    if (playerOneName && playerTwoName && playerOneName !== playerTwoName && playerOneIcon !== playerTwoIcon && playerOneName.length > 3 && playerTwoName.length > 3) {
        document.querySelector('.coverPage').style.display = 'none';
        document.querySelector('.mainPage').style.display = 'flex';
    }
}




//  Acual game TIC TOC TOE

let elem = document.querySelectorAll('td');
let contentID = [];
let playerOneArr = [];
let playerTwoArr = [];
let result;


for (const i of elem) {


    i.onclick = () => {

        if (contentID.includes(+i.getAttribute("title")) === false && contentID.length <= 9 && result === undefined) {

            contentID.push(+i.getAttribute("title"));

            if (contentID.length % 2 !== 0) {
                winningLogic(playerOneArr, i, playerOneName, playerOneIcon, 1);
            }
            else {
                winningLogic(playerTwoArr, i, playerTwoName, playerTwoIcon, 2);
            }
        }
    }

}

//  Actual winning logic
let winningLogic = (arr, serial, nameOfPlayer, avatarOfUser, playerNo) => {

    serial.textContent = avatarOfUser;

    arr.push(+serial.getAttribute("title"));

    let myWins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [3, 5, 7], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9]];
    if (arr.length >= 3) {
        for (let elem of myWins) {
            let ans = elem.every(e => arr.includes(e));
            if (ans) {
                document.querySelector('.main').style.opacity = 0.2;
                document.querySelector('.result-section').classList.add('afterWin');
                document.querySelector('.result').textContent = `player-${playerNo}  ${nameOfPlayer.toUpperCase()} ${avatarOfUser}  is winner 🎉`;
                result = "WIN"
            }
        }
        if (contentID.length > 8 && result === undefined) {
            document.querySelector('.result').textContent = `It's a DROW`;
            result = "DROW"
            document.querySelector('.main').style.opacity = 0.2;
            document.querySelector('.result-section').classList.add('afterWin');
        }
    }

}


//  RESETING THE GAME
document.querySelector('button').onclick = () => {

    if (result === undefined) {

        let ans = confirm("R u sure you want to Re Set ?");
        if (ans) {
            clearAll();
        }
    }
    else {
        clearAll();
    }
}

function clearAll() {
    for (let i of elem) {
        i.textContent = null;
    }
    contentID = [];
    playerOneArr = [];
    playerTwoArr = [];
    result = undefined;
    document.querySelector('.result').textContent = null;

    document.querySelector('.main').style.opacity = 1;
    document.querySelector('.result-section').classList.remove('afterWin');

}






