db.resumoProdutos.insertOne(
  { 
      franquia: "McDonalds",
      totalProdutos: db.produtos.count(),
  },
);

db.resumoProdutos.findOne(
  {}, { franquia: 1, totalProdutos: 1, _id: 0 },
);