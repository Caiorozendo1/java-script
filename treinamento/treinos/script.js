let t1 = 1
let t2 = 1
for(let c = 1;c < 15;c++){
    if(c == 1 || c == 2){
        console.log(1)
    }else{
        let tn = t1 + t2
        console.log(tn)
        t1 = t2
        t2 = tn
    }

}

