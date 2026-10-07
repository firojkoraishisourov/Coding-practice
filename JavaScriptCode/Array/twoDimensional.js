


function highestRunScorer(playerInfo){
    let maxScorer = playerInfo[0][0] ;
    let maxScore = playerInfo[0][1];
    for(let i = 0; i < 4; i++){
        if(maxScore < playerInfo[i][1]){
            maxScore = playerInfo[i][1];
            maxScorer = playerInfo[i][0];
        }
    }
    return maxScorer;
}

let playerInfo =[
     ["Ashraful",56],
     ["Tamim",145],
     ["Sakib",80],
     ["Sabbir",70]
];

let maxScorer = highestRunScorer(playerInfo);
console.log(maxScorer);