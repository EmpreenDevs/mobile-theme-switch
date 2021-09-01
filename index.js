function changeTheme() {
    btn = document.querySelector("#switchBtn");
    body = document.querySelector("body");

    body.classList.toggle("dark-mode");


    // CODE TO CHANGE COLOR THEME META WHEN CLICK ON BUTTON
    let currentColor
    (body.className == "dark-mode") ? currentColor = "#191a1f" : currentColor = "#e5e5e8";
    document.querySelector('meta[name="theme-color"]').setAttribute("content", currentColor);
}
