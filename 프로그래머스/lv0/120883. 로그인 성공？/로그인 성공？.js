function solution(id_pw, db) {
    const [id, pw] = id_pw;
    
    for (let data of db) {
       if (id === data[0]) {
           if (pw === data[1]) {
               return "login";
           }
           return "wrong pw";
       }
   }
    
    return "fail";
}