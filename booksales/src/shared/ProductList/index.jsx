import { useState } from "react";
import booksData from "../../utils/books";
export default function ProductList() {
  const { dataBooks, dataNewBooks } = booksData;
  const [books,setBooks] = useState(dataBooks);
  const addBooks = () => {
    setBooks([...books, ...dataNewBooks]);
  }
  return (
    <div className="album py-5" id="books">
      <h2 className="mt-5 mb-3">Koleksi Populer</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <p className="card-text small flex-grow-1">
                  {book.description}
                </p>
                <p className="fw-bold mb-2">Tahun: {book.year}</p>
                <p className="fw-bold text-success mb-3">
                  Rp {book.price.toLocaleString("id-ID")}
                </p>
                <button className="btn btn-sm btn-primary mt-auto">Beli</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-5" onClick={addBooks} type="button">Load More</button>
    </div>
  );
}
