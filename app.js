const submit_btn = document.getElementById('submit_btn');

function input_length_check(length, input_id) {
    const input = document.getElementById(input_id);
    if (input.value.length > length){
        console.log('nikel bg');
    }else{
        var erreur = 'minimum ' + length + ' caractères';
        document.getElementById(input_id +"_error").innerHTML = erreur;
    }
}


submit_btn.addEventListener('click', function(){
    input_length_check(3, 'input_name');
    input_length_check(2, 'input_email');
});


