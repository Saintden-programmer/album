document.getElementById("loginBtn").addEventListener("click", function () {
  const allowedNames = ["denneth", "vicent", "kurt", "rob", "brent", "jm", "gab"];
  const input = document.getElementById("username");
  const nameInput = input.value.trim().toLowerCase();

  const popup = document.getElementById("popup");
  const welcomeMsg = document.getElementById("welcomeMsg");

  if (allowedNames.includes(nameInput)) {
    const properName = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
    welcomeMsg.textContent = `Welcome ${properName}! 😎`;
    popup.style.display = "flex";

    setTimeout(() => {
      popup.style.display = "none";
      window.location.href = "login.html";
    }, 2000); // 2 seconds bago mag-redirect
  } else {
    input.classList.add("shake");
    setTimeout(() => input.classList.remove("shake"), 500);
    alert("Sorry, di ka authorized pumasok dito 😏");
  }
});
