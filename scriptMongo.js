let connection = new Mongo();
let database = connect("localhost:27017/ecommerce");

database.productos.insertMany([
    {title: "Coca-Cola", price: 180, thumbnail: "https://carrefourar.vtexassets.com/arquivos/ids/197474/7790895002656_02.jpg?v=637523693401530000"},
    {title: "Pepsi", price: 200, thumbnail: "https://carrefourar.vtexassets.com/arquivos/ids/191221/7791813555049_01.jpg?v=637511787878930000"},
    {title: "Sprite", price: 220, thumbnail: "https://carrefourar.vtexassets.com/arquivos/ids/232328/7790895000447_02.jpg?v=637763940887870000"},
    {title: "Fanta", price: 240, thumbnail: "https://carrefourar.vtexassets.com/arquivos/ids/220123/7790895000454_02.jpg?v=637704294056530000"},
    {title: "Mirinda", price: 260, thumbnail: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/611/627/products/2250-mirinda-011-17fdb4404c02207a1916179151426762-480-0.png"},
    {title: "7-UP", price: 300, thumbnail: "https://jumboargentina.vtexassets.com/arquivos/ids/588476/7up-Lima-Limon-225l-1-247057.jpg?v=637280467469470000"},
    {title: "Monster", price: 320, thumbnail: "https://jumboargentina.vtexassets.com/arquivos/ids/682932/Bebida-Monster-Energy-Vr-473cc-1-881537.jpg?v=637764969931230000"},
    {title: "Speed Unlimited", price: 340, thumbnail: "https://jumboargentina.vtexassets.com/arquivos/ids/703712/Bebida-Speed-Unlimited-269cc-1-888008.jpg?v=637895325893670000"},
    {title: "Rockstar", price: 150, thumbnail: "https://carrefourar.vtexassets.com/arquivos/ids/203066/7791813111214_02.jpg?v=637571183877800000"},
    {title: "Quilmes", price: 100, thumbnail: "http://cdn.shopify.com/s/files/1/0393/3231/5303/products/quilmes-cerveza-clasica-botella-1_1024x.jpg?v=1598952014"}
]);

database.mensajes.insertMany([
    {user: "Omar Adra", message: "Primer mensaje"},
    {user: "Paula Barrionuevo", message: "Segundo mensaje"},
    {user: "Omar Adra", message: "Tercer mensaje"},
    {user: "Omar Adra", message: "Cuarto mensaje"},
    {user: "Paula Barrionuevo", message: "Quinto mensaje"},
    {user: "Omar Adra", message: "Sexto mensaje"},
    {user: "Omar Adra", message: "Septimo mensaje"},
    {user: "Paula Barrionuevo", message: "Octavo mensaje"},
    {user: "Omar Adra", message: "Noveno mensaje"},
    {user: "Omar Adra", message: "Decimo mensaje"}
]);

