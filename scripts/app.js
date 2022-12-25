$("textarea").on("keyup paste", function () {
  setTimeout(function () {
    let totalCaracteres = $("textarea").val().length,
      totalPalavras = $("textarea").val().split(" ").length;

    $(".caracteres").text(totalCaracteres);
    $(".palavras").text(totalPalavras);
  }, 200);
});
