let string = '';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach( (button) =>{
    button.addEventListener( 'click' , (e) =>{
        console.log(e.target);
        let Symbol = e.target.innerHTML;

        try{
            if( Symbol == '='){
                string = eval( string );
                document.querySelector('input').value = string;
            }
            else if( Symbol == 'C'){
                string = "";
                document.querySelector('input').value = string;
            }
            else if( Symbol == '%'){
                string = string / 100;
                document.querySelector('input').value = string;
            }
            else if( Symbol == 'Del'){
                
                string = string.substring( 0, string.length-1);
                document.querySelector('input').value = string;

            }
            else{
                string = string + Symbol;
                document.querySelector('input').value = string;
            }
        }catch(err){
            console.log(err);
            document.querySelector('input').value = 'Error';
        }

        
        
    })
})