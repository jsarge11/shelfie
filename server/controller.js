module.exports = {
 create: (req, res) => {
  const db = req.app.get('db');
  db.get_inventory().then( ( product )=>res.status(200).send( product ))
  
 }
}