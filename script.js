document.addEventListener("DOMContentLoaded", function() {
    const modo_escuro = document.getElementById("modo_escuro");
    
    modo_escuro.addEventListener("click", function() {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            modo_escuro.src = "imagens/icone_lua.png";
            localStorage.setItem("darkMode", "disabled");
        } else {
            document.body.classList.add("dark-mode");
            modo_escuro.src = "imagens/icone_sol.png";
            localStorage.setItem("darkMode", "enabled");
        }
    });
    
    const darkModeState = localStorage.getItem("darkMode");
    if (darkModeState === "enabled") {
        document.body.classList.add("dark-mode");
        modo_escuro.src = "imagens/icone_sol.png";
    }
});
