export default function Pricing() {
    const plans = [
      {
        name: 'Basic',
        price: '$29',
        features: ['Basic Analytics', 'Up to 5 Projects', '1 Team Member', '2GB Storage'],
      },
      {
        name: 'Pro',
        price: '$99',
        features: ['Advanced Analytics', 'Unlimited Projects', '5 Team Members', '10GB Storage', 'Priority Support'],
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: ['Custom Analytics', 'Unlimited Projects', 'Unlimited Team Members', '1TB Storage', '24/7 Support', 'Dedicated Manager'],
      },
    ];
  
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-xl shadow-lg border ${
                  plan.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm">
                    Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-8 py-3 rounded-lg font-medium ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }