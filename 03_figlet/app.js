const figlet = require("figlet");

let print = "Harsh Raj";

figlet(print, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});