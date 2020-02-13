export default function(Handlebars) {

  Handlebars.registerHelper('fourdigits', function (input) {
    let inputStr = input.toString();
    let required0s = 4 - inputStr.length;
    let prefix = ("0").repeat(required0s);
    let output = prefix + inputStr;
    return new Handlebars.SafeString(output);
  });
}


