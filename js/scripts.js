$(document).ready(function() {
  $("button#cat").click(function() {
  $("ul#user").prepend("<li>Meow</li>");
  $("ul#user").prepend('<img src="img/cat.jpg"  />');
  $("img").click(function() {
  $(this).remove();
  });

  $("button#dog").click(function() {
  $("ul#webpage").prepend("<li>Woof-woof</li>");
  });

  $("img#cat").click(function() {

  });

  $("img#dog").click(function() {
  $("ul#webpage").before('<img src="../img/dog.jpg" alt="dog">')

  });
});
});
