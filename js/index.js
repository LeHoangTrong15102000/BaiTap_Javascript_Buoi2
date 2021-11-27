// Viết hàm làm ẩn đi thẻ textbox và button bằng thuộc tính disable

const handleDisabled = () => {
  const getTextBox = document.getElementById("textBox");
  const getButton = document.getElementById("btnForm");

  return (document.getElementById("btnClick").onclick = () => {
    getTextBox.disabled = true;
    getButton.disabled = true;
  });
};
handleDisabled();

/************************************* */
// Bài 2 lấy tài khoản và mật khẩu người dùng và thông báo nó lên

const handleLogin = () => {
  const getUserName = document.getElementById("username");
  const getPassWord = document.getElementById("password");
  const getInformation = document.getElementById("notify");

  // nhấn nút Đăng Nhập để lấy thông tin người dùng\
  return (document.getElementById("btnLogin").onclick = () => {
    getInformation.innerHTML = `Tài khoản của bạn: ${getUserName.value}, mật khẩu của bạn: ${getPassWord.value}`;
    getInformation.style.backgroundColor = "green";
    getInformation.style.color = "white";
  });
};
handleLogin();
