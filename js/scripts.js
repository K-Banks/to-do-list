var titleArray = [""];

function Item (title, details, priority) {
  this.title = title;
  this.details = details;
  this.priority = priority;
  this.id = title.replace(/" "/g, "");
}

Item.prototype.removeItem = function(newItem) {
  var listToRemove = document.getElementById(newItem.id);
  console.log(listToRemove);
  listToRemove.remove();
  for (var i = 0; i < titleArray.length; i++) {
    if (titleArray[i] === newItem.title) {
      titleArray.splice(i, 1);
    }
  }
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
    var titleCheck = 0;

    for (var i = 0; i < titleArray.length; i++) {
      if (inputTitle === titleArray[i]) {
        titleCheck += 1;
      }
    }

    if (titleCheck === 0) {
      titleArray.push(inputTitle);
      var newItem = new Item(inputTitle, inputDetails, inputPriority);
      console.log(newItem);

      if (newItem.priority[0] === "1"){
        $("ul.highPriority").append("<li id='"+ newItem.id+"'>" + newItem.title + "<p id='"+newItem.id+"'>" + newItem.details + "</p><button class='button'>Completed!</button></li>");
      } else if (newItem.priority[0] === "2") {
        $("ul.lowPriority").append("<li id='"+ newItem.id+"'>" + newItem.title + "<p id='"+newItem.id+"'>" + newItem.details + "</p><button class='button'>Completed!</button></li>");
      } else {
        $("ul.mehPriority").append("<li id='"+ newItem.id+"'>" + newItem.title + "<p id='"+newItem.id+"'>" + newItem.details + "</p><button class='button'>Completed!</button></li>");
      }
      $(".button").last().click(function() {
        newItem.removeItem(newItem);
      });
    } else {
      alert("That task is already addded.")
    }

  });
});
