$(document).ready(function() {
  $('.getFavAnimal').on('click', function() {
    $.ajax({
      url: `/favorites/animals`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      success: function(response) {
        $(".animal").append(`<h2>${response.animal}!</h2>`)
      },
      error: function(res, status, error) {
        location.href = "/"
      }
    });
    
  });
});
$(document).ready(function() {
  $('.animal button').on('click', function() {
    var animal = $(this).siblings('img').attr('alt').toLowerCase();
    
    $.ajax({
      url: `/sounds/animals/${animal}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      success: function(response) {
        alert(response);
      },
      error: function(res, status, error) {
        alert(res.responseText);
        location.href = "/"
      }
    });
    
  });
});


