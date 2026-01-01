function Add(a, b, ab) {
    return result = a + b;
    ab(result);


}



console.log(

    Add(2, 4, function (val) {
        console.log(val)
    })

);
 
