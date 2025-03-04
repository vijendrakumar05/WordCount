let textbox = document.getElementById("textbox");


textbox.addEventListener('input', function () {
      let text = this.value;
      let chars = text.length;
      document.getElementById("char").innerHTML = chars;

      text = text.trim();
      let words = text.split(" ");
      let cleanList = words.filter(function(elm) {
         return elm !="";
      });
    //   console.log(words);
    //   console.log(cleanList);
      document.getElementById("word").innerHTML = cleanList.length;

});