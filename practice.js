let array = [1,2,3,4,5,6,7,8,9];
let found = false;
function checkArray(array){
    let found = false;
    console.log(array)
    array.map((elem)=>{
        if(elem===7){
            found = true;
        }else{
            found = false;
        }
    })
    if(found){
        console.log('BOOM!'); 
    }else{
        console.log('There is no 7 in the array'); 
    }
}