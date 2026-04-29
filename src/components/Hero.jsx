export default function Hero() {
    return (
        <section
            id="home"
            style={{
                height: '100vh',
                backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}
        >
            {/* Dark overlay - increased opacity for better text contrast */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // darker than before (was 0.5)
                }}
            ></div>

            {/* Content */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    textAlign: 'center',
                    color: 'white',
                    padding: '0 1rem',
                    maxWidth: '800px',
                    margin: '0 auto',
                }}
            >
                <p
                    style={{
                        color: '#FBBF24', // amber-400
                        letterSpacing: '2px',
                        fontSize: '0.875rem',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        fontWeight: '600',
                    }}
                >
                    EST. 2026
                </p>
                <h1
                    style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        fontFamily: "'Playfair Display', serif",
                        marginBottom: '1rem',
                        textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                        color: 'white',
                    }}
                >
                    Gee's Eatery
                </h1>
                <p
                    style={{
                        fontSize: '1.25rem',
                        marginBottom: '2rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        color: '#f0f0f0',
                        textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                    }}
                >
                    Good Food. Great Vibes. Always.
                </p>
                <div
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <a
                        href="#menu"
                        style={{
                            backgroundColor: '#B85C38',
                            color: 'white',
                            padding: '0.75rem 2rem',
                            borderRadius: '9999px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            display: 'inline-block',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#9a4a2c';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#B85C38';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Explore Menu
                    </a>
                    <a
                        href="#contact"
                        style={{
                            border: '2px solid white',
                            color: 'white',
                            padding: '0.75rem 2rem',
                            borderRadius: '9999px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            backgroundColor: 'transparent',
                            transition: 'all 0.3s ease',
                            display: 'inline-block',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'white';
                            e.target.style.color = '#2C2C2C';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Reserve a Table
                    </a>
                </div>
            </div>
        </section>
    );
}