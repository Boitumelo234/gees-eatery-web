const dishes = [
    { name: "Grilled Peri-Peri Chicken", desc: "Char-grilled chicken with secret peri-peri sauce", price: "R89", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { name: "Beef Burger Deluxe", desc: "150g beef patty, cheddar, caramelized onions", price: "R75", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { name: "Lamb Chops", desc: "Grilled to perfection with rosemary & garlic", price: "R149", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { name: "Veggie Platter", desc: "Grilled vegetables, hummus, pita bread", price: "R69", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
];

export default function Menu() {
    return (
        <section id="menu">
            <div className="container">
                <h2 className="section-title">Signature Grill</h2>
                <p className="text-center" style={{ marginBottom: '2rem' }}>Fire‑grilled dishes made with fresh, locally sourced ingredients.</p>
                <div className="menu-grid">
                    {dishes.map((dish, idx) => (
                        <div className="card" key={idx}>
                            <img className="card-img" src={dish.image} alt={dish.name} />
                            <div className="card-content">
                                <h3>{dish.name}</h3>
                                <p style={{ color: '#666', margin: '0.5rem 0' }}>{dish.desc}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span className="price">{dish.price}</span>
                                    <button className="order-btn">Order</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center" style={{ marginTop: '2rem' }}>
                    <a href="#contact" className="btn-outline" style={{ borderColor: '#B85C38', color: '#B85C38' }}>Full Menu Available</a>
                </div>
            </div>
        </section>
    );
}