var sidebar = document.getElementById("sidebar");
var icon = document.getElementById("menu-button");
var content = document.querySelector(".content");

function toggleMenu() { // Abrir sidebar
    sidebar.style.width = "250px";
}

document.addEventListener("click", function(event) {
    // Verificar se a sidebar está aberta
    if (sidebar.style.width == "250px") {
        // Verificar se o clique não está dentro da sidebar nem no ícone
        if (!(sidebar.contains(event.target) || icon.contains(event.target))) {
            // Se o clique estiver fora da sidebar e do ícone, oculte a sidebar
            sidebar.style.width = "0";
        }
    }
});
