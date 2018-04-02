function Item (title, details, priority) {
  this.title = title;
  this.details = details;
  this.priority = priority;
  this.id = title.replace(/" "/g, "");
}


$(document).ready(function(){
  $("#listSubmit").submit(function(event){
    event.preventDefault();

    var inputTitle = $("#title").val();
    var inputDetails = $("#details").val();
    var inputPriority = $("#priority").val();

    var newItem = new Item(inputTitle, inputDetails, inputPriority);
    console.log(newItem);

    if (newItem.priority[0] === "1"){
      $("ul.highPriority").append("<li id='"+ newItem.id+"'>" + newItem.title + "<p class='"+newItem.id+"'>" + newItem.details + "<button class='button'>Completed!</button></p></li>");
    } else if (newItem.priority[0] === "2") {
      $("ul.lowPriority").append("<li id='"+ newItem.id+"'>" + newItem.title + "<p class='"+newItem.id+"'>" + newItem.details + "<button class='button'>Completed!</button></p></li>");
    } else {
      $("ul.mehPriority").append("<li id='"+ newItem.id+"'>" + newItem.title + "<p class='"+newItem.id+"'>" + newItem.details + "<button class='button'>Completed!</button></p></li>");
    }
    $(".button").last().click(function() {
      var listToRemove = document.getElementById(newItem.id);
      console.log(listToRemove);
      listToRemove.remove();
    });
    $("#title").val("");
    $("#details").val("");
    $("#priority").val("");
  });
});
