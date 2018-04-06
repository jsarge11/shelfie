module.exports = {
 get: (req, res) => {
  const db = req.app.get('db');
  db.get_inventory().then( ( product )=>res.status(200).send( product ))
  
 },
 create: (req, res) => {
  const db = req.app.get('db');
  let { name, price, img_url } = req.body.product;
  db.create_product(name, price, img_url).then(()=> {
   res.status(200).send(req.body);
  })
 },
 delete: (req, res) => {
  const db = req.app.get('db');

  db.delete_product(req.params.id)
  .then(() => {
   res.status(200).send()
  })
 }
}