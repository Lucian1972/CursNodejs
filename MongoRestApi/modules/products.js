exports.config = module.exports.config = {
    mongoClient: null,
    mongoUrl : ''
};


exports.createProduct = module.exports.createProduct = function createProduct(){
    console.log("products createProduct");
};

exports.updateProduct = module.exports.updateProduct = function updateProduct(){
    console.log("products update");
};

exports.listProduct = module.exports.listProduct = function listProduct(){
    var products = mProducts.listProducts();
    res.writeHead(200, {'Content-type': 'appication/JSON'});
    res.end(JSON.stringify(products))


    console.log("products list");

    var mongoUrl = this.config.mongoUrl;
    var mongoClient = this.config.Client;

  //  var url = "mongodb://localhost:27017/mydb";
    this.exports.config.mongoClient.connect(url,function (err,db){

    if (err) throw err;
    console.log("Database created!");
    
    db.close();
    });
};

exports.getProduct = module.exports.getProduct = function getProduct(){
    console.log("products get");
};

exports.deleteProduct= module.exports.deleteProduct = function deleteProduct(){
    console.log("products delete");
};