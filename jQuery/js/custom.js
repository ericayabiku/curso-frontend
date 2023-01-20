// instancia jquery e evita conflitos
// jQuery( function($){
    $(document).ready(function(){

        $('.owl-carousel').owlCarousel();
    
        let titulos = $('h4') // tag
       
        let itens = $('.featured-item') // class
        
        let destaques = $('#featured') // id
    
        console.log(titulos.first());

 
    })    
        // Configuração de produtos //
  
        $('.featured-item a').addClass('btn btn-dark stretch-link');
    
        $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').addClass('active')
        // $('.featured-item:first h4').removeClass('active')
        // $('.featured-item:first h4').toggleClass('active')
        // $('.featured-item:first h4').hide()
        // $('.featured-item:first h4').show()
        // $('.featured-item:first h4').fadeIn(2000)
        // $('.featured-item:first h4').fadeOut()
        //  $('.featured-item:first h4').css('color', '#f00')
        
        // webpack carrossel de fotos //
        plugins: [
            new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              'window.jQuery': 'jquery'
            }),
        ]
        
        //...
    
         /*
          * Manipulação de eventos
          */

         $('.featured-item a').on('blur', function(event){
    
            event.preventDefault();
    
            alert('Produto esgotado');
         
        })
         
         $('.featured-item h4').dblclick( function(){
    
            $(this).css({
                'color': '#f00',
                'background': '#ff0',
                'font-weight': '100',
            });
        })
    
        

         //Callbacks

         $('.featured-item:nth(1)')
         .hide(2000, function(){
            //* esse é um callback
         //* entendendo açoes que começam no término de outra
         console.log($(this).find('h4').text() + 'esgotado')
            
         }) 

         .show(2000, function(){
            console.log($(this).find('h4'),text() + 'em estoque')
            


         })

        
    

    