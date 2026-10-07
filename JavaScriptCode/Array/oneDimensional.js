

function highestScore(scores){
    let targetedScore = scores[0];
    for(let i = 0; i < scores.length; i++){
        if(scores[i]>targetedScore){
            targetedScore = scores[i];
        }
    }
    return targetedScore;
}

let scores = [40,45,90,60,80];

let maxScore = highestScore(scores);
console.log("Maximum score: ",maxScore);

