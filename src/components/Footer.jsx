export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <h3 style={{ fontFamily: 'Playfair Display', marginBottom: '0.5rem' }}>Gee's <span style={{ color: '#E0A23B' }}>Eatery</span></h3>
                <p>Good Food. Great Vibes. Always.</p>
                <div style={{ margin: '1rem 0', display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '1.5rem' }}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E0A23B', textDecoration: 'none' }}>📘</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E0A23B', textDecoration: 'none' }}>📸</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E0A23B', textDecoration: 'none' }}>🐦</a>
                </div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>© 2026 Gee's Eatery — Est. with passion at Old Maphuta Cafe.</p>
            </div>
        </footer>
    );
}