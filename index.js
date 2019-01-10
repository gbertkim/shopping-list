$(function() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();   
        var userEntry = $('#shopping-list-entry').val();
        $(".shopping-list").append( 
          '<li>' +
          '<span class="shopping-item">' +
          userEntry + 
          '</span>' +
          '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
          '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
          '</button>' +
          '</div>' +
          '</li>'
        );
         $('#shopping-list-entry').val('');
     });
  
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).parent().prev().toggleClass("shopping-item__checked");  
    });
  
    $('.shopping-list').on('click','.shopping-item-delete', function(event) {
        $(this).parent().parent().remove();
    }); 
  });