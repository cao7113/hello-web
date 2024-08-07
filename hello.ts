console.log("hello vite");
document.getElementById("button")?.addEventListener("click", () => {
  document.getElementById("info").innerText = `clicked at ${new Date()}`;
});