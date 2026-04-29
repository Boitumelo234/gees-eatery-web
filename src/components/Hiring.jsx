const positions = [
    { title: "Junior Chef", icon: "👨‍🍳", description: "Passion for grilling and fresh ingredients" },
    { title: "Cleaner / Waiter", icon: "🧹", description: "Keep vibes high and tables spotless" },
    { title: "Cashier", icon: "💰", description: "Friendly face to handle orders and payments" }
];

export default function Hiring() {
    return (
        <section id="hiring" className="py-24 bg-amber-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">We're Hiring!</h2>
                    <p className="text-xl text-gray-600">Join the Gee's Eatery family from day one.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {positions.map((job, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center border-t-4 border-amber-500">
                            <div className="text-5xl mb-4">{job.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                            <p className="text-gray-500 mb-6">{job.description}</p>
                            <a href="#contact" className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-700 transition">Apply Now</a>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 text-gray-500 text-sm">
                    📧 Send your CV / inquiry via contact below
                </div>
            </div>
        </section>
    );
}