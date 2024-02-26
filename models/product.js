// const fs = require("fs");
// const path = require("path");

const db = require('../util/database');

const Cart = require("./cart");

// const p = path.join(
//   path.dirname(require.main.filename),
//   "data",
//   "products.json"
// );

// const getProductsFromFile = (cb) => {
//   fs.readFile(p, 'utf-8', (err, fileContent) => {
//     // console.log("File content:", fileContent);
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)', [this.title, this.price, this.description, this.imageUrl]);
  }

  static deleteById(id) {
    return db.execute('DELETE FROM products WHERE products.id = ?', [id]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }

  // save() {
  //   getProductsFromFile((products) => {
  //     if (this.id) {
  //       const existingProductIndex = products.findIndex(
  //         (prod) => prod.id === this.id
  //       );
  //       const updatedProducts = [...products];
  //       updatedProducts[existingProductIndex] = this;
  //       fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
  //         console.log(err);
  //       });
  //     } else {
  //       this.id = Math.random().toString();
  //       products.push(this);
  //       fs.writeFile(p, JSON.stringify(products), (err) => {
  //         console.log(err);
  //       });
  //     }
  //   });
  // }

  // static deleteById(id) {
  //   getProductsFromFile((products) => {
  //     const product = products.find((prod) => prod.id === id);
  //     // console.log(products) 
  //     // console.log(product)
  //     // console.log(id)
  //     const updatedProducts = products.filter((prod) => prod.id !== id);
  //     fs.writeFile(p, JSON.stringify(updatedProducts), err => {
  //       if(!err) {
  //         Cart.deleteProduct(id, product.price);
  //       }
  //     });
  //   });
  // }
  // // static deleteById(id) {
  // //   getProductsFromFile((products) => {
  // //     const productIndex = products.findIndex((prod) => prod.id === id);
  // //     if (productIndex !== -1) {
  // //       const product = products[productIndex];
  // //       const updatedProducts = products.filter((prod) => prod.id !== id);
  // //       fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
  // //         if (!err) {
  // //           // Call Cart.deleteProduct after successful write
  // //           Cart.deleteProduct(id, product.price);
  // //         }
  // //       });
  // //     } else {
  // //       console.error(`Product with ID ${id} not found.`);
  // //     }
  // //   });
  // // }

  // static fetchAll(cb) {
  //   getProductsFromFile(cb);
  // }

  // static findById(id, cb) {
  //   getProductsFromFile((products) => {
  //     const product = products.find((p) => p.id === id);
  //     cb(product);
  //   });
  // }
};
