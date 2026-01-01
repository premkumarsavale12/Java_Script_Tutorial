

function Outer_Function() {
    let count = 0;

    function Inner_Function() {

        count++;

        console.log(count);
         

    };
     
     Inner_Function();
      
};
 
const count = Outer_Function();
  