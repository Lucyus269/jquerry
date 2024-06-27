$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        const nomeDaTarefa = $('input').val();
        const novaTarefa = $(`<li>${nomeDaTarefa}</li>`);

        $(novaTarefa).appendTo('ul')
        $('input').val('')
    })
})