import sql from "../../../DB/connection.js";

export const AllUsers = (req, res) => {
  sql.execute(`select * from users`, (err, result) => {
    if (err) {
      res.json({ message: "Query Error", err });
    } else {
      res.json({ message: "Done", result });
    }
  });
};
export const AddUser = (req, res) => {
  const { firstName, lastName, email, password, age } = req.body;
  sql.execute(
    `insert into users (firstName, lastName, email, password, age)values ('${firstName}','${lastName}','${email}','${password}',${age}) `,
    (err, result) => {
      if (err) {
        if (err.code == "ER_DUP_ENTRY") {
          res.json({ message: "E-mail is exist please enter other Email" });
        } else {
          res.json({ message: "Query Error", err });
        }
      } else {
        res.json({ message: "Done", result });
      }
    }
  );
};
export const login = (req, res) => {
  const { email, password } = req.body;
  sql.execute(
    `select id from users where email='${email}' and password='${password}'`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
       if(result.length){
        res.json({ message: "Done", result });
       }
       else{
        res.json({ message: "email or password not match"});
       }
      }
    }
  );
};
export const updateuser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password, age } = req.body;
  sql.execute(
    `update users set firstName='${firstName}',lastName='${lastName}',email='${email}',password='${password}',age=${age} where id=${id}`,
    (err, result) => {
      if (err) {
        if (err.code == "ER_DUP_ENTRY") {
          res.json({ message: "E-mail is exist please enter other Email" });
        } else {
          res.json({ message: "Query Error", err });
        }
      } else {
        if (result.affectedRows) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: "user is inValid" });
        }
      }
    }
  );
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  sql.execute(`delete from users where id=${id}`, (err, result) => {
    if (err) {
      res.json({ message: "Query Error", err });
    } else {
      if (result.affectedRows) {
        res.json({ message: "Done", result });
      } else {
        res.json({ message: "user is inValid" });
      }
    }
  });
};
export const userStartWith = (req, res) => {
  const { char } = req.query;
  sql.execute(
    `select * from users where firstName like '${char}%'`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        if (result) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: `Don't have any user started with ${char}` });
        }
      }
    }
  );
};
export const userEndWith = (req, res) => {
  const { char } = req.query;
  sql.execute(
    `select * from users where firstName like '%${char}'`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        if (result.length) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: `Don't have any user end with ${char}` });
        }
      }
    }
  );
};
export const getuser = (req, res) => {
  const { id } = req.params;
  sql.execute(`select * from users where id=${id}`, (err, result) => {
    if (err) {
      res.json({ message: "Query Error", err });
    } else {
      if (result.length) {
        res.json({ message: "Done", result });
      } else {
        res.json({ message: `Don't have user with id=${id}` });
      }
    }
  });
};
export const getusersBetween = (req, res) => {
  const { age1, age2 } = req.query;
  sql.execute(
    `select * from users where age > ${age1} and age < ${age2}`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        if (result.length) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: `Don't have user with id=${id}` });
        }
      }
    }
  );
};
export const getUsers = (req, res) => {
  const { age, key } = req.query;
  sql.execute(
    `select * from users where age < ${age} and firstName like '${key}%'`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        if (result.length) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: `Don't have user with this condition` });
        }
      }
    }
  );
};
export const users = (req, res) => {
  const { key } = req.query;
  sql.execute(
    `select * from users where firstName like '${key}%' or lastName like '${key}%'`,
    (err, result) => {
      if (err) {
        res.json({ message: "Query Error", err });
      } else {
        if (result.length) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: `Don't have user with this condition` });
        }
      }
    }
  );
};
