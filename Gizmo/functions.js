function drawSquare(){
  //  context.fillStyle = '#000000';
  //  context.fillRect(100, 100, 100, 100);

  $('.canvas').append('<div class="draggable square"></div>');
  $( ".draggable" ).draggable();
}

function drawTriangle(){
  $('.canvas').append('<div class="draggable triangle"></div>');
  $( ".draggable" ).draggable();
}

function drawCircle(){
  $('.canvas').append('<div class="draggable circle"></div>');
  $( ".draggable" ).draggable();
}
function drawRectangle(){
  $('.canvas').append('<div class="draggable rectangle"></div>');
  $( ".draggable" ).draggable();
}

$( function(){
    $( ".draggable" ).draggable();
} );
