const SHOW_CELL_ROW_AND_COLUMN = false;
const PIXEL_CANVAS_MAX_PIXELS = 50;

// add event hanlder when the user clicks the submit button to create the grid
var $btnSubmit = $("#btnSubmit");
$btnSubmit.on("click", function() {
  var rows = $("#input_height").val();
  var cols = $("#input_width").val();
  var $pixel_canvas = $("#pixel_canvas");

  console.log('rows: ' + rows + ' cols: ' + cols);

  //clear out the grid
  $pixel_canvas.empty();

  //buid the new grid
  for (var i = 0; i < rows; i++) {
    $pixel_canvas.append("<tr></tr>");
    for (var j = 0; j < cols; j++) {
      if (SHOW_CELL_ROW_AND_COLUMN) {
        $pixel_canvas.children().last().append("<td>" + i + ',' + j + "</td>");
      } else {
        $pixel_canvas.children().last().append("<td></td>");
      }
    }
  }
  addCellClickEvent();
})

// add a click event to the td element of the pixel canvas
function addCellClickEvent() {
  var $td = $("td");
  var $colorPicker = $("#colorPicker");
  console.log("add cell click event");
  $td.on("click", function() {
    var column_num = $(this).parent().children().index($(this));
    var row_num = $(this).parent().parent().children().index($(this).parent());
    $(this).css("background",$colorPicker.val());
    console.log(column_num + "," + row_num);
  })
}

function validatePixelCanvasDimension(obj) {
  if (obj.val() > PIXEL_CANVAS_MAX_PIXELS) {
    obj.val(PIXEL_CANVAS_MAX_PIXELS);
  }
}

$(document).ready(function() {
  addCellClickEvent();

  var $input_width = $("#input_width");
  $input_width.on("change", function() {
    validatePixelCanvasDimension($(this));
  })

  var $input_height = $("#input_height");
  $input_height.on("change", function() {
    validatePixelCanvasDimension($(this));
  })
})
