let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]

function listar() {
    produtos.forEach((p) => {
      console.log(p);
    });
  }
  listar();
  
  const listar_por_categoria = (categoria) => {
    for (let i = 0; i < produtos.length; i++) {
      if (categoria == produtos[i].categoria) {
        console.log(produtos[i]);
      } else if (categoria !== produtos[i].categoria) {
        console.log("Não encontrado");
      }
    }
  };
  
  listar_por_categoria("Eletrônico");
  
  


function listar() {
    produtos.forEach(p => {
        console.log(p)
    })
}



