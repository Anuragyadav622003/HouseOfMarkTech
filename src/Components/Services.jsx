export default function Services() {
    const services = [
      {
        title: 'Web Development',
        description: 'Modern and responsive web applications built with cutting-edge technologies',
        icon: '💻',
      },
      {
        title: 'UI/UX Design',
        description: 'User-centered designs that enhance user experience and engagement',
        icon: '🎨',
      },
      {
        title: 'Performance Optimization',
        description: 'Lightning-fast applications with optimized loading times',
        icon: '⚡',
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }