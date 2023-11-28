import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };  
  const save = async () => {
    await client.updateUser(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };


  return (
    <div className="container mt-5 w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <div className="mb-3">
            <input type="text" className="form-control" value={account.password}
              onChange={(e) => setAccount({ ...account, password: e.target.value })}/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" value={account.firstName}
              onChange={(e) => setAccount({ ...account, firstName: e.target.value })}/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" value={account.lastName}
              onChange={(e) => setAccount({ ...account, lastName: e.target.value })}/>
          </div>
          <div className="mb-3">
            <input type="date" className="form-control" value={account.dob}
              onChange={(e) => setAccount({ ...account, dob: e.target.value })}/>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" value={account.email}
              onChange={(e) => setAccount({ ...account, email: e.target.value })}/>
          </div>
          <div className="mb-3">
            <select className="form-select" onChange={(e) => setAccount({ ...account, role: e.target.value })}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <button className="btn btn-primary mb-3" onClick={save}>Save</button>
          <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
          <button className="btn btn-danger w-100 mt-3" onClick={signout}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
}

export default Account;
