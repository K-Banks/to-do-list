function Item (title, details, priority) {
  this.title = title;
  this.details = details;
  this.priority = priority;
}

$(document).ready(function(){
  $("#listSubmit").submit(function(event){
    event.preventDefault();

    var inputTitle = $("#title").val();
    var inputDetails = $("#details").val();
    var inputPriority = $("#priority").val();



  });
});
