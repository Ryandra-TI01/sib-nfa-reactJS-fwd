import "./App.css";

function App() {
  const members = [
    { name: "Andi", role: "CEO", img: "https://i.pravatar.cc/150?img=1" },
    { name: "Budi", role: "Developer", img: "https://i.pravatar.cc/150?img=2" },
    { name: "Citra", role: "Designer", img: "https://i.pravatar.cc/150?img=3" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none align-items-center"
          >
            <i className="fa-solid fa-book fa-xl"></i>
          </a>
          <span className="fs-4 ms-2">Book Store</span>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#home" className="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#books" className="nav-link px-2">
              Book
            </a>
          </li>
          <li>
            <a href="#team" className="nav-link px-2">
              Team
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link px-2">
              Contacts
            </a>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Register
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <div className="container my-5" id="hero">
        <div className="row align-items-center border rounded-3 shadow-lg p-4">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold">Temukan Buku Favoritmu</h1>
            <p className="lead">
              Book Store menyediakan berbagai koleksi buku mulai dari novel,
              pendidikan, hingga teknologi. Jelajahi dan temukan bacaan yang
              menginspirasi!
            </p>
            <button className="btn btn-primary btn-lg me-2">Lihat Buku</button>
            <button className="btn btn-outline-secondary btn-lg">
              Tentang Kami
            </button>
          </div>
          <div className="col-lg-5 text-center">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              className="img-fluid rounded shadow"
              alt="books"
            />
          </div>
        </div>
      </div>

      {/* BOOKS */}
      <div className="album py-5 bg-body-tertiary" id="books">
        <h2 className="mt-5 mb-3">Koleksi Populer</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {["Atomic Habits", "Clean Code", "The Pragmatic Programmer"].map(
            (book, i) => (
              <div className="col" key={i}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={`https://picsum.photos/400/300?random=${i}`}
                    className="card-img-top"
                    alt={book}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book}</h5>
                    <p className="card-text">
                      Deskripsi singkat tentang buku {book}.
                    </p>
                    <button className="btn btn-sm btn-primary">Beli</button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* TEAM */}
      <div className="container my-5" id="team">
        <h2 className="text-center mb-4">Our Team</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {members.map((m, i) => (
            <div className="col" key={i}>
              <div className="card text-center shadow-sm">
                <img src={m.img} className="card-img-top" alt={m.name} />
                <div className="card-body">
                  <h5 className="card-title">{m.name}</h5>
                  <p className="card-text">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="container my-5" id="contact">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama Anda"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Kirim
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h5>Alamat</h5>
            <p>Jl. Raya Jakarta No. 123</p>
            <h5>Email</h5>
            <p>support@bookstore.com</p>
            <h5>Telepon</h5>
            <p>+62 812 3456 7890</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
