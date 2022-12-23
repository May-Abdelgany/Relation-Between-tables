import sql from "../../../DB/connection.js";
export const add = (req, res) => {
  const { title, description, Price, user_id,image } = req.body;
  sql.execute(
    `insert into products (title, description, Price, user_id,image)
     values ('${title}','${description}',${Price},${user_id},'${image}')`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        res.json({ message: "Done", result });
      }
    }
  );
};
export const allProducts = (req, res) => {
  sql.execute(
    `select p.id as p_id ,p.image,p.title, p.description ,p.price,u.id as u_id, u.firstName ,u.lastName, u.email  from products as p inner join users as u On p.user_id=u.id`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        res.json({ message: "Done", result });
      }
    }
  );
};
export const myProducts = (req, res) => {
  const { id } = req.params;
  sql.execute(
    `select p.id as p_id  ,p.image,p.title, p.description ,p.price,u.id as u_id, u.firstName ,u.lastName, u.email  from products as p inner join users as u On p.user_id=u.id where u.id=${id}`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        res.json({ message: "Done", result });
      }
    }
  );
};
export const product = (req, res) => {
  const { id } = req.params;
  sql.execute(
    `select p.id as p_id  ,p.image,p.title, p.description ,p.price,u.id as u_id, u.firstName ,u.lastName, u.email  from products as p inner join users as u On p.user_id=u.id where p.id=${id}`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        res.json({ message: "Done", result });
      }
    }
  );
};
export const products = (req, res) => {
  const { price } = req.query;
  sql.execute(
    `select p.id as p_id  ,p.image,p.title, p.description ,p.price,u.id as u_id, u.firstName ,u.lastName, u.email  from products as p inner join users as u On p.user_id=u.id where p.price>${price}`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        res.json({ message: "Done", result });
      }
    }
  );
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { user_id, title, description, Price, image } = req.body;
  sql.execute(
    `update products set title='${title}',image='${image}',description='${description}',Price=${Price} where id=${id} and user_id=${user_id}`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        if (result.affectedRows) {
          res.json({ message: "Done", result });
        } else {
          res.json({
            message: "you don't have access for update this product",
          });
        }
      }
    }
  );
};
export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const { user_id } = req.query;
  sql.execute(
    `delete from products where id=${id} and user_id=${user_id}`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        if (result.affectedRows) {
          res.json({ message: "Done", result });
        } else {
          res.json({
            message: "you don't have access for delete this product",
          });
        }
      }
    }
  );
};

export const search = (req, res) => {
  const { key } = req.query;
  sql.execute(
    `select p.id as p_id  ,p.image,p.title, p.description ,p.price,u.id as u_id, u.firstName ,u.lastName, u.email  from products as p inner join users as u On p.user_id=u.id where p.title like '${key}%'`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        res.json({ message: "Done", result });
      }
    }
  );
};
export const mySearch = (req, res) => {
  const { id } = req.params;
  const { key } = req.query;
  sql.execute(
    `select p.id as p_id  ,p.image,p.title, p.description ,p.price,u.id as u_id, u.firstName ,u.lastName, u.email  from products as p inner join users as u On p.user_id=u.id where u.id=${id} and p.title like '${key}%'`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        res.json({ message: "Done", result });
      }
    }
  );
};
