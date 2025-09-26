export default function ProductList() {
  return (
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
  );
}
