<div align="center">

# 🍦 El Geladon

### *A Sorveteria mais Cool da Web!* 🎨✨

[![GitHub](https://img.shields.io/badge/GitHub-AdrianoBSantana-181717?style=for-the-badge&logo=github)](https://github.com/AdrianoBSantana)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Produção-success?style=for-the-badge)]()

![palet](https://user-images.githubusercontent.com/101372228/169913778-f15150b0-343d-4e12-9e6a-553168a5df78.PNG)

</div>

---

## 📋 Sobre o Projeto

**El Geladon** é uma aplicação web moderna para gerenciamento de paletas de sorvete, desenvolvida com **JavaScript Vanilla** puro. O projeto demonstra domínio completo de operações CRUD, manipulação de DOM, requisições assíncronas e design responsivo com gradientes animados espetaculares! 🌈

### 🎯 Objetivo

Criar uma interface intuitiva e visualmente atraente para gerenciar um catálogo de paletas de sorvete, permitindo cadastro, visualização, edição e exclusão de produtos de forma dinâmica e sem recarregamento de página.

---

## ✨ Funcionalidades

### 🔍 **Busca e Visualização**
- ✅ Listar todas as paletas disponíveis
- ✅ Buscar paleta específica por nome
- ✅ Visualização em cards estilizados

### 📝 **Gerenciamento**
- ✅ Cadastrar novas paletas
- ✅ Editar paletas existentes
- ✅ Deletar paletas (com confirmação)
- ✅ Modal interativo para formulários

### 🎨 **Experiência do Usuário**
- ✅ Design responsivo (Mobile, Tablet, Desktop)
- ✅ Gradiente animado de fundo
- ✅ Loading spinner durante requisições
- ✅ Efeitos visuais suaves (glassmorphism)
- ✅ Validação de formulários em tempo real
- ✅ Feedback visual para todas as ações

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

| Tecnologia | Descrição |
|------------|-----------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Estrutura semântica |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Estilização avançada |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Lógica e interatividade |
| ![API](https://img.shields.io/badge/REST_API-02569B?style=for-the-badge&logo=fastapi&logoColor=white) | Integração com backend |

</div>

### 📦 Recursos CSS Avançados:
- CSS Variables (Custom Properties)
- Flexbox & CSS Grid
- Keyframe Animations
- Glassmorphism Effects
- Media Queries (Responsividade)

### ⚡ JavaScript Moderno:
- Async/Await
- Fetch API
- Event Delegation
- DOM Manipulation
- Error Handling (Try/Catch)
- Data Attributes

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexão com a internet (para API)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/AdrianoBSantana/Projeto-JavaScript-Vanilla.git
```

2. **Navegue até o diretório**
```bash
cd Projeto-JavaScript-Vanilla
```

3. **Abra o arquivo index.html**
   - Opção 1: Clique duas vezes no arquivo
   - Opção 2: Use um servidor local:
   
```bash
# Com Python
python -m http.server 8000

# Com Node.js (npx)
npx serve

# Com VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

4. **Acesse no navegador**
```
http://localhost:8000
```

---

## 📁 Estrutura do Projeto

```
Projeto-JavaScript-Vanilla/
│
├── 📄 index.html          # Estrutura HTML principal
├── 🎨 style.css           # Estilos e animações
├── ⚡ script.js           # Lógica da aplicação
│
├── 📁 assets/
│   ├── logo.PNG           # Logo da aplicação
│   ├── icons/             # Ícones diversos
│   │   └── sacola.svg     # Ícone do carrinho
│   ├── images/            # Imagens do projeto
│   ├── Icecold.ttf        # Fonte personalizada
│   ├── Franchise.ttf      # Fonte personalizada
│   └── fontastique.ttf    # Fonte personalizada
│
├── 📖 README.md           # Este arquivo
├── 📝 MELHORIAS.md        # Documentação das melhorias
└── 📜 LICENSE             # Licença do projeto
```

---

## 🎨 Destaques Visuais

### 🌈 Paleta de Cores
```css
--color-gradient-1: #A85CF9  /* Roxo vibrante */
--color-gradient-2: #5534A5  /* Roxo escuro */
--color-gradient-3: #4B7BE5  /* Azul royal */
--color-gradient-4: #6FDFDF  /* Azul ciano */
```

### ✨ Efeitos Especiais
- **Gradiente Animado**: Background com transição suave de 15 segundos
- **Glassmorphism**: Cards com efeito vidro fosco e blur
- **Loading Spinner**: Animação de carregamento rotativa
- **Hover Effects**: Transformações e transições suaves

---

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints em:

| Dispositivo | Largura | Layout |
|-------------|---------|--------|
| 📱 Mobile | < 400px | 1 coluna |
| 📱 Mobile L | < 840px | 1 coluna |
| 💻 Tablet | < 1220px | 2 colunas |
| 🖥️ Desktop | > 1220px | 3 colunas |

---

## 🔌 API Integration

### Endpoint Base
```javascript
https://el-geladon-backend-by-ip.herokuapp.com/paletas
```

### Operações Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/find-paletas` | Buscar todas as paletas |
| `GET` | `/find-paleta/:id` | Buscar paleta por ID |
| `POST` | `/create` | Criar nova paleta |
| `PUT` | `/update/:id` | Atualizar paleta |
| `DELETE` | `/delete/:id` | Deletar paleta |

---

## 🎯 Funcionalidades CRUD

### ✅ Create (Criar)
- Formulário modal com validação
- Campos obrigatórios validados
- Feedback visual de sucesso

### 📖 Read (Ler)
- Listagem completa de paletas
- Busca individual por nome
- Visualização detalhada

### 🔄 Update (Atualizar)
- Modal pré-preenchido com dados existentes
- Atualização em tempo real no DOM
- Confirmação visual

### 🗑️ Delete (Deletar)
- Confirmação antes de excluir
- Remoção dinâmica do DOM
- Mensagem de feedback

---

## 🏆 Melhorias Implementadas (v2.0)

Este projeto passou por uma refatoração completa! Confira todas as melhorias no arquivo [MELHORIAS.md](MELHORIAS.md)

### 🔧 Principais Upgrades:
1. ✅ Event Listeners em vez de onclick inline
2. ✅ Tratamento completo de erros
3. ✅ Validação de formulários
4. ✅ Loading states profissionais
5. ✅ CSS com variáveis customizadas
6. ✅ Código refatorado e DRY
7. ✅ Atualização dinâmica do DOM
8. ✅ Melhor experiência do usuário

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! 💜

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

<div align="center">

### **Adriano B. Santana**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AdrianoBSantana)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/AdrianoBSantana)

---

</div>
