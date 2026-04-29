const reviews = [
    { name: "Thabo M.", text: "The grilled chicken is out of this world! Best spot in town for sure.", rating: 5 },
    { name: "Lerato K.", text: "Such a warm vibe and the staff treats you like family. 10/10.", rating: 5 },
    { name: "Sipho N.", text: "Finally a place that understands fresh ingredients. The lamb chops? Divine.", rating: 5 },
];

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container">
                <h2 className="section-title">What Our Guests Say</h2>
                <div className="testimonial-grid">
                    {reviews.map((rev, idx) => (
                        <div className="testimonial-card" key={idx}>
                            <div className="stars">{"★".repeat(rev.rating)}</div>
                            <p style={{ fontStyle: 'italic', margin: '1rem 0' }}>"{rev.text}"</p>
                            <p style={{ fontWeight: 'bold', color: '#B85C38' }}>— {rev.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}