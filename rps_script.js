function updateScoreElement(){
    document.querySelector('.result-line').innerHTML=`Wins:- ${score.wins}, Losses:- ${score.losses}, Ties:- ${score.ties}`;
}
let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0, losses:0, ties:0
};
updateScoreElement();
function pickCompMove(){
    const randomNumber=Math.random();
    let compMove='';
    if(randomNumber>=0 && randomNumber < 1/3){
        compMove='rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3){
        compMove='paper';
    }
    else{
        compMove='scissor';
    }
    return compMove;
}
function playGame(playerMove){
    const compMove=pickCompMove();
    let result='';
    if(playerMove==='rock'){
        if(compMove==='rock'){
            result='Tie';
        }
        else if(compMove==='paper'){
            result='You Lose';
        }
        else{
            result='You Win';
        }
    }
    else if(playerMove==='paper'){
        if(compMove==='rock'){
            result='You Win';
        }
        else if(compMove==='paper'){
            result='Tie';
        }
        else{
            result='You Lose';
        }
    }
    else{
        if(compMove==='rock'){
            result='You Lose';
        }
        else if(compMove==='paper'){
            result='You Win';
        }
        else{
            result='Tie';
        }
    }

    if(result==='You Win'){
        score.wins++;
    }
    else if(result==='You Lose'){
        score.losses++;
    }
    else{
        score.ties++;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.middle-result').innerHTML=result;
    document.querySelector('.middle-move-info').innerHTML=`You played:- <img src="Icons/${playerMove}.png" class="icon"> <img src="Icons/${compMove}.png" class="icon"> -:Com played`;
    
}