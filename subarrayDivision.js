function birthday(s, d, m) {
    let matched = 0;
    for(let i = 0; i < s.length; i++){
        let subArr = s.slice(i, i+m);
        let sum = subArr.reduce((a, b) => a + b, 0);
        if(sum == d){
            matched++;
        }
    }

    return matched;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
