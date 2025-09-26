import Footer from "../../shared/footer";
import Header from "../../shared/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="container my-5" id="contact">
        <h2 className="text-center mb-5 fw-bold">Contact Us</h2>
        <div className="row g-4">
          {/* Form Section */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h4 className="mb-4 text-primary">Kirim Pesan</h4>
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Nama</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Pesan</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Tulis pesan Anda..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Kirim
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="col-md-6">
            <div className="bg-light p-4 rounded-4 shadow-sm h-100">
              <h4 className="mb-3 text-primary">Informasi Kontak</h4>
              <p>
                <strong>Alamat:</strong> Jl. Raya Jakarta No. 123
              </p>
              <p>
                <strong>Email:</strong> support@bookstore.com
              </p>
              <p>
                <strong>Telepon:</strong> +62 812 3456 7890
              </p>
              <hr />
              <p className="text-muted small">
                Kami akan membalas pesan Anda secepat mungkin. Terima kasih
                telah menghubungi kami!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
