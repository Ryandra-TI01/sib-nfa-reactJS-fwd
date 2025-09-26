export default function Hero() {
  return (
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
  );
}
