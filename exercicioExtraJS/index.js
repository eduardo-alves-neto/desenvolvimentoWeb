/* 1. Agrupar Itens por Categoria*/
// Dado um array de objetos que representam produtos de uma loja,
// organize-os em um objeto onde as chaves são categorias e os valores são arrays
// contendo os produtos correspondentes.

// const products = [
//   { name: "Camisa", category: "Roupas" },
//   { name: "Celular", category: "Eletrônicos" },
//   { name: "Calça", category: "Roupas" },
//   { name: "Fone de Ouvido", category: "Eletrônicos" },
// ];

// Resultado esperado:
// {
//   Roupas: [{ name: 'Camisa' }, { name: 'Calça' }],
//   Eletrônicos: [{ name: 'Celular' }, { name: 'Fone de Ouvido' }]
// }

//metodo reduce so serve para arrays ,vc usa geralmente quando voce quer mudar um array para objeto,numero ou array diferente,etc...
// const groupedProducts = products.reduce((acc, product) => {
//   if (!acc[product.category]) acc[product.category] = [];

//   acc[product.category].push(product);

//   return acc;
// }, {});

/*2. Contar Ocorrências */

//Dado um array de objetos representando transações de compras,
//calcule quantas vezes cada produto foi comprado.

// const transactions = [
//   { product: "Maçã" },
//   { product: "Banana" },
//   { product: "Laranja" },
//   { product: "Maçã" },
//   { product: "Laranja" },
// ];

// // Resultado esperado:
// // { Maçã: 2, Banana: 1, Laranja: 1 }

// const numberOccurrence = transactions.reduce((acc, transaction) => {
//   if (!acc[transaction.product]) {
//     acc[transaction.product] = 1;
//   } else {
//     acc[transaction.product] += 1;
//   }

//   return acc;
// }, {});

/*3. Filtrar e Agrupar por Intervalo de Preço */
// Dado um array de produtos com preço, agrupe-os em intervalos de preço (exemplo: barato, médio e caro).

// const products: { name: string; price: number }[] = [
//   { name: "Cadeira", price: 100 },
//   { name: "Mesa", price: 500 },
//   { name: "Lâmpada", price: 50 },
//   { name: "Computador", price: 2000 },
// ];

// // Intervalos de preço: barato <= 100, médio <= 1000, caro > 1000
// // Resultado esperado:
// // {
// //   barato: [{ name: 'Lâmpada', price: 50 }, { name: 'Cadeira', price: 100 }],
// //   médio: [{ name: 'Mesa', price: 500 }],
// //   caro: [{ name: 'Computador', price: 2000 }]
// // }

// const priceInterval = products.reduce((acc, product) => {
//   if (product.price <= 100) {
//     if (!acc["barato"]) {
//       acc["barato"] = [];
//     }
//     acc["barato"].push(product);
//   }

//   return acc;
// }, {});

// console.log(priceInterval);

// 4. Juntar Dois Arrays com Chaves Comuns
// Dado dois arrays de objetos, combine-os em um
//único array de objetos com base em uma chave comum (como id).
// Exemplo:

// const users = [
//   { id: 1, name: "João" },
//   { id: 2, name: "Maria" },
// ];

// const scores = [
//   { id: 1, score: 90 },
//   { id: 2, score: 85 },
// ];

// // Resultado esperado:
// // [
// //   { id: 1, name: 'João', score: 90 },
// //   { id: 2, name: 'Maria', score: 85 }
// // ]

// const combined = users.reduce((acc, user) => {
//   const score = scores.find((item) => item.id === user.id)?.score;
//   acc.push({ ...user, score });
//   return acc;
// }, []);

// console.log(combined);
