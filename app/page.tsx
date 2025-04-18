import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
            alt="Cooking preparation"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-88px)] text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-shadow-lg">
            CookUp Your Perfect Meal
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl text-shadow">
            AI-powered meal planning that fits your budget and lifestyle
          </p>
          <a
            href="#get-started"
            className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-700">
            Why choose CookUp?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Budget-friendly
              </h3>
              <p className="text-gray-700">
                Get personalized recipes that fit your budget with
                cost-effective ingredient alternatives.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Smart Planning
              </h3>
              <p className="text-gray-700">
                AI-powered suggestions based on your preferences, dietary needs,
                and available ingredients.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Time-saving
              </h3>
              <p className="text-gray-700">
                Quick and easy meal planning with detailed instructions and
                shopping lists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-700">
            Simple Pricing
          </h2>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-700">
                Unlimited access to all features
              </h3>
              <div className="text-4xl font-bold text-center mb-6 text-gray-700">
                $10<span className="text-xl text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Personalized meal plans
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Smart recipe suggestions
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Shopping list generation
                </li>
              </ul>
              <Link href="/auth/login">
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  Start Free Trial
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
