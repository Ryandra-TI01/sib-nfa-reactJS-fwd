import { Link } from "react-router";

export default function Header() {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
                <Link
                    to="/"
                    className="d-inline-flex link-body-emphasis text-decoration-none align-items-center"
                >
                    <i className="fa-solid fa-book fa-xl"></i>
                </Link>
                <span className="fs-4 ms-2">Book Store</span>
            </div>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <Link to="/" className="nav-link px-2 link-secondary">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/books" className="nav-link px-2">
                        Book
                    </Link>
                </li>
                <li>
                    <Link to="/team" className="nav-link px-2">
                        Team
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link px-2">
                        Contacts
                    </Link>
                </li>
            </ul>
            <div className="col-md-3 text-end">
                <Link to="/login">
                    <button type="button" className="btn btn-outline-primary me-2">
                        Login
                    </button>
                </Link>

                <Link to="/register">                
                    <button type="button" className="btn btn-primary">
                        Register
                    </button>
                </Link>
            </div>
        </header>
    );
}
