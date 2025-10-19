const baseUrl = "https://el-geladon-backend-by-ip.herokuapp.com/paletas";

let paletas;

// Funções de Loading
function showLoading() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.classList.add('active');
  }
}

function hideLoading() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.classList.remove('active');
  }
}

// Função auxiliar para criar HTML de uma paleta
function createPaletaHTML(paleta) {
  return `
    <div class="PaletaListaItem" id="PaletaListaItem_${paleta._id}">
      <div>
        <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
        <div class="PaletaListaItem__preco">R$ ${paleta.preco.toFixed(2)}</div>
        <div class="PaletaListaItem__descricao">${paleta.descricao}</div>
        <div class="PaletaListaItem__acoes Acoes">
          <i class="Acoes__editar fa-solid fa-pen-to-square" data-id="${paleta._id}"></i>
          <button class="Acoes__deletar" data-id="${paleta._id}">deletar</button>
        </div>
      </div>
      <img class="PaletaListaItem__foto" 
        src="${paleta.foto}"
        alt="Paleta de ${paleta.sabor}" />
    </div>
  `;
}

async function findAllPaletas() {
  showLoading();
  try {
    const response = await fetch(`${baseUrl}/find-paletas`);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar paletas: ${response.status}`);
    }
    
    paletas = await response.json();
    console.log("paletas", paletas);

    paletas.forEach((paleta) => {
      document.getElementById("paletaList").insertAdjacentHTML(
        "beforeend",
        createPaletaHTML(paleta)
      );
    });

    // Adicionar event listeners após renderizar as paletas
    attachPaletaEventListeners();
  } catch (error) {
    console.error("Erro ao carregar paletas:", error);
    alert("Erro ao carregar as paletas. Por favor, tente novamente mais tarde.");
  } finally {
    hideLoading();
  }
}

// Função para adicionar event listeners aos botões de ação das paletas
function attachPaletaEventListeners() {
  // Event listeners para editar
  document.querySelectorAll('.Acoes__editar').forEach(btn => {
    btn.addEventListener('click', (event) => {
      const id = event.currentTarget.dataset.id;
      abrirModal(true, id);
    });
  });

  // Event listeners para deletar
  document.querySelectorAll('.Acoes__deletar').forEach(btn => {
    btn.addEventListener('click', (event) => {
      const id = event.currentTarget.dataset.id;
      deletePaleta(id);
    });
  });
}

findAllPaletas();

const findPaletaById = async () => {
  showLoading();
  try {
    const inputElement = document.getElementById("idPaleta").value.trim();

    if (!inputElement) {
      alert("Por favor, digite o nome da paleta!");
      hideLoading();
      return;
    }

    const paletaEscolhida = paletas.filter(paleta => paleta.sabor.toLowerCase() === inputElement.toLowerCase());

    if (paletaEscolhida.length === 0) {
      alert("Paleta não encontrada!");
      hideLoading();
      return;
    }

    const id = paletaEscolhida[0]._id;

    const response = await fetch(`${baseUrl}/find-paleta/${id}`);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar paleta: ${response.status}`);
    }
    
    const paleta = await response.json();

    const paletaEscolhidaDiv = document.getElementById("paletaEscolhida");

    paletaEscolhidaDiv.innerHTML = `
      <div class="PaletaListaItem" id="PaletaListaItem_${paleta._id}">
        <div>
          <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
          <div class="PaletaCardItem__preco">R$ ${paleta.preco.toFixed(2)}</div>
          <div class="PaletaCardItem__descricao">${paleta.descricao}</div>
          <div class="PaletaListaItem__acoes Acoes">
            <i class="Acoes__editar fa-solid fa-pen-to-square" data-id="${paleta._id}"></i>
            <button class="Acoes__deletar" data-id="${paleta._id}">deletar</button>
          </div>
        </div>
        <img class="PaletaCardItem__foto" src="${paleta.foto}" alt="Paleta de ${paleta.sabor}" />
      </div>
    `;

    // Adicionar event listeners para a paleta encontrada
    const editBtn = paletaEscolhidaDiv.querySelector('.Acoes__editar');
    const deleteBtn = paletaEscolhidaDiv.querySelector('.Acoes__deletar');

    if (editBtn) {
      editBtn.addEventListener('click', (event) => {
        const id = event.currentTarget.dataset.id;
        abrirModal(true, id);
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener('click', (event) => {
        const id = event.currentTarget.dataset.id;
        deletePaleta(id);
      });
    }
  } catch (error) {
    console.error("Erro ao buscar paleta:", error);
    alert("Erro ao buscar a paleta. Por favor, tente novamente.");
  } finally {
    hideLoading();
  }
};



async function abrirModal(isEdit = false, paletaId = null) {
  showLoading();
  try {
    if (isEdit && paletaId) {
      document.querySelector("#title-header-modal").innerText = "Atualizar uma paleta";
      document.querySelector("#button-form-modal").innerText = "Atualizar";

      const response = await fetch(`${baseUrl}/find-paleta/${paletaId}`);
      
      if (!response.ok) {
        throw new Error(`Erro ao buscar paleta: ${response.status}`);
      }
      
      const paleta = await response.json();

      document.querySelector("#id").value = paleta._id;
      document.querySelector("#sabor").value = paleta.sabor;
      document.querySelector("#preco").value = paleta.preco;
      document.querySelector("#descricao").value = paleta.descricao;
      document.querySelector("#foto").value = paleta.foto;
    } else {
      document.querySelector("#title-header-modal").innerText = "Cadastrar uma paleta";
      document.querySelector("#button-form-modal").innerText = "Cadastrar";
    }
    document.querySelector(".modal-overlay").style.display = "flex";
  } catch (error) {
    console.error("Erro ao abrir modal:", error);
    alert("Erro ao carregar os dados da paleta. Por favor, tente novamente.");
  } finally {
    hideLoading();
  }
}

function fecharModalCadastro() {
  document.querySelector(".modal-overlay").style.display = "none";

  document.querySelector("#sabor").value = "";
  document.querySelector("#preco").value = 0;
  document.querySelector("#descricao").value = "";
  document.querySelector("#foto").value = "";
}


async function submitPaleta() {
  showLoading();
  try {
    const id = document.getElementById("id").value;
    const sabor = document.querySelector("#sabor").value.trim();
    const preco = document.querySelector("#preco").value;
    const descricao = document.querySelector("#descricao").value.trim();
    const foto = document.querySelector("#foto").value.trim();

    // Validação básica
    if (!sabor || !preco || !descricao || !foto) {
      alert("Por favor, preencha todos os campos!");
      hideLoading();
      return;
    }

    if (preco <= 0) {
      alert("O preço deve ser maior que zero!");
      hideLoading();
      return;
    }

    const paleta = {
      id,
      sabor,
      preco: parseFloat(preco),
      descricao,
      foto,
    };

    const modoEdicaoAtivado = !!id;

    const endpoint = baseUrl + (modoEdicaoAtivado ? `/update/${id}` : '/create');

    const response = await fetch(endpoint, {
      method: modoEdicaoAtivado ? "put" : "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(paleta),
    });

    if (!response.ok) {
      throw new Error(`Erro ao salvar paleta: ${response.status}`);
    }

    const novaPaleta = await response.json();

    const html = createPaletaHTML(novaPaleta);

    if (modoEdicaoAtivado) {
      document.getElementById(`PaletaListaItem_${id}`).outerHTML = html;
      alert("Paleta atualizada com sucesso!");
    } else {
      document.getElementById("paletaList").insertAdjacentHTML("beforeend", html);
      alert("Paleta cadastrada com sucesso!");
    }

    // Re-adicionar event listeners após atualizar o DOM
    attachPaletaEventListeners();

    document.getElementById("id").value = "";

    fecharModalCadastro();
  } catch (error) {
    console.error("Erro ao salvar paleta:", error);
    alert("Erro ao salvar a paleta. Por favor, tente novamente.");
  } finally {
    hideLoading();
  }
};


const deletePaleta = async (id) => {
  try {
    console.log("id", id);

    if (!confirm("Tem certeza que deseja deletar esta paleta?")) {
      return;
    }

    showLoading();

    const response = await fetch(`${baseUrl}/delete/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar paleta: ${response.status}`);
    }

    const result = await response.json();
    alert(result.message);

    // Remover apenas o elemento específico do DOM
    const paletaElement = document.getElementById(`PaletaListaItem_${id}`);
    if (paletaElement) {
      paletaElement.remove();
    }
  } catch (error) {
    console.error("Erro ao deletar paleta:", error);
    alert("Erro ao deletar a paleta. Por favor, tente novamente.");
  } finally {
    hideLoading();
  }
};

// Event Listeners principais
document.addEventListener('DOMContentLoaded', () => {
  // Botão de pesquisar paleta
  const btnPesquisar = document.getElementById('idPaletaButton');
  if (btnPesquisar) {
    btnPesquisar.addEventListener('click', findPaletaById);
  }

  // Botão de cadastrar paleta
  const btnCadastrar = document.getElementById('btnCadastrarPaleta');
  if (btnCadastrar) {
    btnCadastrar.addEventListener('click', () => abrirModal(false));
  }

  // Botão de fechar modal
  const btnFecharModal = document.getElementById('closeModal');
  if (btnFecharModal) {
    btnFecharModal.addEventListener('click', fecharModalCadastro);
  }

  // Botão de submit do formulário
  const btnSubmit = document.getElementById('button-form-modal');
  if (btnSubmit) {
    btnSubmit.addEventListener('click', submitPaleta);
  }

  // Fechar modal ao clicar fora dele
  const modalOverlay = document.querySelector('.modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) {
        fecharModalCadastro();
      }
    });
  }
});