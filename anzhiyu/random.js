var posts=["2024/03/31/hello-world/","2024/03/31/apple/","2024/03/31/life/","2024/03/31/homekit/","2024/03/31/ios-dev-note/","2024/04/01/webp_convert/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };