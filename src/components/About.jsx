export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="about-grid">
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left', marginTop: 0 }}>Our Story</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>Founded in 2026, <strong>Gee's Eatery</strong> was born from a simple belief: fresh ingredients, perfectly grilled, made with passion. We're a brand new spot at Old Maphuta Cafe, but our commitment to serving smiles with every plate is already legendary.</p>
                        <p>Whether you're here for the vibes or the food — you're family. Come taste the difference that passion makes.</p>
                    </div>
                    <div className="about-img">
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Chef cooking" />
                    </div>
                </div>
            </div>
        </section>
    );
}