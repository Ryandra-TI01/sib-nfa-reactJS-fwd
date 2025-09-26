import Footer from "../../shared/footer";
import Header from "../../shared/Header";

export default function Team() {
  const members = [
    { name: "Andi", role: "CEO", img: "https://i.pravatar.cc/150?img=1" },
    { name: "Budi", role: "Developer", img: "https://i.pravatar.cc/150?img=2" },
    { name: "Citra", role: "Designer", img: "https://i.pravatar.cc/150?img=3" },
  ];
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
