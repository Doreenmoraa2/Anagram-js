function anagram(x,y){
    
    check1=x.split("").sort().join("");
    check2=x.split("").sort().join("");
    if(check1==check2){
        return true;
    }else{
        return false;
    }
}
let genAnagram= anagram("silent", "listen");
console.log(genAnagram);