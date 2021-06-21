function toggleFunction() {
    console.log("here")
    var t = document.getElementById("links");
    if (t.style.display === "block") {
      t.style.display = "none";
    } else {
      t.style.display = "block";
    }
}