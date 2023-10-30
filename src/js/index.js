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


function imprimirPagina() {
  window.print();
}

function toggleContrast() {
  var body = document.body;
  body.classList.toggle('contraste');
}
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle('dark-mode');
}
  // Função para aumentar a fonte
  function aumentarFonte() {
    const currentFontSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    const newSize = parseInt(currentFontSize) + 2;
    document.body.style.fontSize = newSize + 'px';
  }

  // Função para reduzir a fonte
  function reduzirFonte() {
    const currentFontSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    const newSize = parseInt(currentFontSize) - 2;
    document.body.style.fontSize = newSize + 'px';
  }

  var marcaTextoAtivada = false;
        var botaoMarcaTexto = document.getElementById('alternar-marca-texto');

        function alternarMarcaTexto() {
            marcaTextoAtivada = !marcaTextoAtivada;

            if (marcaTextoAtivada) {
                botaoMarcaTexto.textContent = 'Desativar Marca-texto';
                ativarMarcaTexto();
            } else {
                botaoMarcaTexto.textContent = 'Ativar Marca-texto';
                desativarMarcaTexto();
            }
        }

        function ativarMarcaTexto() {
            document.addEventListener('mouseup', marcaTextoSelecionado);
        }

        function desativarMarcaTexto() {
            document.removeEventListener('mouseup', marcaTextoSelecionado);
        }

        function limparMarcaTexto() {
            var marcacoes = document.querySelectorAll('.marca-texto');
            marcacoes.forEach(function (marca) {
                var pai = marca.parentNode;
                pai.replaceChild(marca.firstChild, marca);
                pai.normalize();
            });
        }

        function marcaTextoSelecionado(event) {
            if (marcaTextoAtivada) {
                var selecao = window.getSelection();
                if (selecao.toString() !== '') {
                    var span = document.createElement('span');
                    span.className = 'marca-texto';
                    selecao.getRangeAt(0).surroundContents(span);
                    selecao.removeAllRanges();
                }
            }
        }
function abrirToolbar() {
    var toolbar = document.querySelector('.toolbar');
    if (toolbar.style.display === 'none') {
        toolbar.style.display = 'block';
        toolbar.classList.add('vertical-toolbar'); // Adicione a classe para orientação vertical
    } else {
        toolbar.style.display = 'none';
    }
}
