const fields = document.querySelectorAll('.field'),
      button = document.getElementById('btn');



button.addEventListener('click', function() {
    fields.forEach(field => {
        val = field;
        // console.log(field.value);
        check(val);
     
     });
});

function check(val) {
        let mess; 
        let value = val.value;
        let name =  val.name;
        
            switch (value) {
                case value.trim() && "":
                     console.log(name + ' пустое поле');
                break;
                case /^\d+$/.test(value) && value:
                    (value === '42') ? mess = "И спасибо за рыбу!" : mess = "ЦИФРА!";         
                    break;
                case "ДМИР":
                    mess = "УРА!";          
                    break;
                case "ТЕРЕМ":
                    mess = "<3";
                    break;
                default:
                break;
            };
            // message(mess) ;
            (typeof mess !== 'undefined')? message(mess) : '';
                     
};


function message(al) {
   console.log(al);
   alert(al);
};
    


