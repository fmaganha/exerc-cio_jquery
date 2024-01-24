$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaTarefa = $('#tarefa-nova').val();
        const novoItem = $(`<li>${enderecoNovaTarefa}</li>`);
        $(novoItem).appendTo('ul');
        $('#tarefa-nova').val('');

        $('li:last').on('click', function(){
            $(this).addClass('concluido');
        });
    });
});