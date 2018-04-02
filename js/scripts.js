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

    $("ul.highPriority").append("<li id='"+ newItem.id+"'>" + newItem.title + "<p class='"+newItem.id+"'>" + newItem.details + "</p><button class='button'>Completed!</button></li>");

    $(".button").last().click(function() {
      var listToRemove = document.getElementById(newItem.id);
      console.log(listToRemove);
      listToRemove.remove();
    });


  });
});
