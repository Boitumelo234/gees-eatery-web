const galleryImages = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

export default function Gallery() {
    return (
        <section id="gallery">
            <div className="container">
                <h2 className="section-title">Moments & Plates</h2>
                <p className="text-center" style={{ marginBottom: '2rem' }}>A glimpse of the vibe and our dishes.</p>
                <div className="gallery-grid">
                    {galleryImages.map((img, idx) => (
                        <img key={idx} className="gallery-img" src={img} alt={`Gallery ${idx}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}