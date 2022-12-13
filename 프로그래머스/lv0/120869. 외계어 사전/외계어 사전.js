function solution(spell, dic) {
    
    spell = spell.sort().join("");
    
    const sortedDic = dic.map(el => el
                              .split("")
                              .sort()
                              .join(""));
    
    return sortedDic.find(el => el === spell) ? 1 : 2;
}