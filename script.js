function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
      window.location.href = "home.html";
      return false;
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu");
      return false;
    }
  }
  