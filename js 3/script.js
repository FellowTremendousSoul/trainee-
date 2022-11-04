const staff = [
    [0,"Антон"],
    [1,"Юля"] , 
    [1,"Коля"] , 
    [2,"Ира"] , 
    [3,"Катя"],
    
],
 positions = [
    "Руководитель", 
    "Программист", 
    "Контент менеджер", 
    "Стажер",
];


//создание кнопок с выбором должности 
for (let i = 0; i < positions.length; i++) {  
    let form = document.getElementById('prog');
    form.insertAdjacentHTML('beforeend', '<input type="button" id="'+ i +'" class="button" name="form"  value="'+positions[i] +'">'); 
}


const buttons = document.querySelectorAll('.button'),
      t2 = document.getElementById('t2'),
      t3 = document.getElementById('t3');
     

inner();

buttons.forEach((btn) =>{
    btn.addEventListener('click', inner);
});

function insertThead() {
    t3.innerHTML="";
    th = document.getElementById('th3');
    th.innerHTML = '<tr><th>Должность</th><th>Сотрудник</th></tr>';
}

function inner(){

    switch (this.id) {      
        case "all":
            insertThead();      
            for (let i = 0; i < positions.length; i++) {  
               staff.forEach(staffItem => { 
                    if (i === staffItem[0]) {   
                        let tr = document.createElement('tr');
                        tr.innerHTML = 
                            '<td>'+ positions[i] +'</td>' +'<td>'+ staffItem[1]+'</td>';
                        t3.prepend(tr);
                   }     
                });  
            };
            break;

        case /^\d+$/.test(this.id) && this.id:  
        insertThead();
            for (let i = 0; i < positions.length; i++) {  
            if(i === +this.id){
                staff.forEach(staffItem => {
                    if (i === staffItem[0]) {
                        let tr = document.createElement('tr');
                        tr.innerHTML = 
                        '<td>'+ positions[i]+'</td>' +
                        '<td>'+ staffItem[1]+'</td>';
                        t3.prepend(tr);
                        // console.log(item); 
                    }     
                });  
            }    
            };
        break;
        
        default:
            t2.innerHTML="";   
            th = document.getElementById('th2');
            th.innerHTML = '<tr><th>Сотрудники</th></tr>';
                staff.forEach(staffItem => {
                        let tr = document.createElement('tr');
                        tr.innerHTML = 
                        '<td>'+ staffItem[1]+'</td>';
                        t2.append(tr);
         });
        break;
}
}






