import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const popularRecipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    category: "Italian",
    time: "30 min",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Teriyaki Salmon Bowl",
    category: "Asian",
    time: "25 min",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Mediterranean Salad",
    category: "Healthy",
    time: "15 min",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Hero Background with Overlay Gradient */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80"
            alt="Cooking preparation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-16 pb-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              CookUp
              <span className="text-primary block mt-2">Your Perfect Meal</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              AI-powered meal planning that fits your budget and lifestyle. 
              Discover recipes, plan meals, and cook with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link href="#get-started" 
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all transform hover:scale-105 font-medium text-center">
                Get Started Free
              </Link>
              <Link href="#how-it-works"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all backdrop-blur-sm text-center">
                How It Works
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-xs sm:max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-1">10K+</div>
              <div className="text-xs sm:text-sm text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-1">5K+</div>
              <div className="text-xs sm:text-sm text-gray-300">Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-1">4.9</div>
              <div className="text-xs sm:text-sm text-gray-300">User Rating</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Popular Recipes Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Popular Recipes
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our community's most loved recipes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-6xl mx-auto mb-10 sm:mb-16">
            {popularRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 sm:h-64 w-full">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm mb-2">
                    <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">
                      {recipe.category}
                    </span>
                    <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">
                      {recipe.time}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Difficulty: {recipe.difficulty}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/recipes"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-900 text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors"
            >
              Explore All Recipes
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why choose CookUp?
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of meal planning with our innovative features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Budget-friendly Feature */}
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:rotate-1">
              <div className="mb-4 sm:mb-6 text-primary">
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-900">
                Budget-friendly
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Get personalized recipes that fit your budget with cost-effective ingredient alternatives and smart shopping lists.
              </p>
            </div>

            {/* Smart Planning Feature */}
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:rotate-1">
              <div className="mb-4 sm:mb-6 text-primary">
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-900">
                Smart Planning
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                AI-powered suggestions based on your preferences, dietary needs, and available ingredients in your pantry.
              </p>
            </div>

            {/* Time-saving Feature */}
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:rotate-1">
              <div className="mb-4 sm:mb-6 text-primary">
                <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-900">
                Time-saving
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Quick and easy meal planning with detailed instructions, timers, and automated shopping lists generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Simple Pricing
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Start cooking smarter with our affordable plan
            </p>
          </div>
          
          <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-gray-900">
                  Unlimited Access
                </h3>
                <div className="flex items-center justify-center mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">$10</span>
                  <span className="text-lg sm:text-xl text-gray-600 ml-2">/month</span>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Personalized meal plans",
                    "Smart recipe suggestions",
                    "Shopping list generation",
                    "Nutritional tracking",
                    "Recipe collections",
                    "24/7 support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/auth/login">
                  <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-colors text-sm sm:text-base">
                    Start Free Trial
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
