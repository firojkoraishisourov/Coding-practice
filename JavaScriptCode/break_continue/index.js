for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        continue;
    }
    document.write(" "+i);
    if(i == 11){
        break;
    }
}