// premitive type : number , string , boolean , null,symbol
// non-premitive type : function , object , arrays

// FUNCTION
// TASK if name is
// RAM :- YOU NEED TO SAY Hi
// shyam :- you need to say hello
// kam :- you need to say 1
// bam :- you need to say 1.2
// lam :- you need to say false
// jam :- you need to say null
// if there is any other name return void
function sayHi(name){
    if( "RAM"==name ){
        return "hello";
    }else if( "SHYAM"==name ){
        return "hi";
    }else if( "BAM"==name ){
        return 1.2;
    }else if( "KAM"==name ){
        return 1;
    }else if( "LAM"==name ){
        return false;
    }else if( "JAM"==name ){
        return null;
    }
}
