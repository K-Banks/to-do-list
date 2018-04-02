function Item (title, details, priority) {
  this.title = title;
  this.details = details;
  this.priority = priority;
  this.id = title.replace(/" "/g, "");
}

Item.prototype.removeItem = function(target) {
  $(target).parents('li').remove();
  $("#title").val("");
  $("#details").val("");
  $("#priority").val("");
}

$(document).ready(function(){
  $("#listSubmit").submit(function(event){
    event.preventDefault();

    var inputTitle = $("#title").val();
    var inputDetails = $("#details").val();
    var inputPriority = $("#priority").val();
    var newItem = new Item(inputTitle, inputDetails, inputPriority);

    if (newItem.priority[0] === "1"){
      $("ul.highPriority").append("<li>" + newItem.title + "<p>" + newItem.details + "</p><button class='button'>Completed!</button></li>");
      $("ul.highPriority .button").last().click(function() {
        newItem.removeItem(this);
      });
    } else if (newItem.priority[0] === "2") {
      $("ul.lowPriority").append("<li>" + newItem.title + "<p>" + newItem.details + "</p><button class='button'>Completed!</button></li>");
      $("ul.lowPriority .button").last().click(function() {
        newItem.removeItem(this);
      });
    } else {
      $("ul.mehPriority").append("<li>" + newItem.title + "<p>" + newItem.details + "</p><button class='button'>Completed!</button></li>");
      $("ul.mehPriority .button").last().click(function() {
        newItem.removeItem(this);
      });
    }
    $("#title").val("");
    $("#details").val("");
    $("#priority").val("");
  });
});
