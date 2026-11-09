import { formatNumber } from "../utils/formatNumber";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <span className="navbar-brand mb-0 fs-6">Pizzería Mamma Mía!</span>

          <button className="btn btn-outline-light btn-sm">🍕 Home</button>

          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
              <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm">🔐 Login</button>
              <button className="btn btn-outline-light btn-sm">🔐 Register</button>
            </>
          )}
        </div>

        {/* Siempre visible */}
        <button className="btn btn-outline-info btn-sm">
          🛒 Total: ${formatNumber(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
