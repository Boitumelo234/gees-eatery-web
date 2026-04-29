import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', message: '' });
    };
    return (
        <section id="contact">
            <div className="container">
                <h2 className="section-title">Visit Us</h2>
                <div className="contact-grid">
                    <div>
                        <div className="info-card">
                            <h3>📍 Location</h3>
                            <p>Old Maphuta Cafe</p>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>Exact street address provided upon booking</p>
                        </div>
                        <div className="info-card">
                            <h3>🕒 Trading Hours</h3>
                            <p>Monday – Sunday: <strong>09:00 – 19:30</strong></p>
                        </div>
                        <div className="info-card">
                            <h3>📞 Contact</h3>
                            <a href="tel:0633770767" style={{ color: '#B85C38', fontWeight: 'bold', fontSize: '1.2rem' }}>063 377 0767</a>
                            <p style={{ fontSize: '0.8rem' }}>Call / WhatsApp</p>
                        </div>
                        <div className="info-card">
                            <h3>📧 Send a message</h3>
                            {sent && <div style={{ background: '#d4edda', padding: '0.5rem', borderRadius: '8px', marginBottom: '1rem' }}>✅ Message received! We'll reply soon.</div>}
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                                <input type="email" name="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
                                <textarea name="message" rows="3" placeholder="Table reservation or any question..." value={form.message} onChange={handleChange} required></textarea>
                                <button type="submit">Send Inquiry</button>
                            </form>
                        </div>
                    </div>
                    <div className="map">
                        <iframe title="Old Maphuta Cafe map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.123456!2d28.0473!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDEyJzE0LjgiUyAyOMKwMDInNTAuMCJF!5e0!3m2!1sen!2sza!4v1610000000000!5m2!1sen!2sza" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}