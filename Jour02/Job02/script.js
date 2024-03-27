function showhide() {
    let article = document.getElementById("article");
    
    if (article.style.display === "block") {
    
      article.style.display = "none";
    } else {
    
      article.style.display = "block";
    }
  }