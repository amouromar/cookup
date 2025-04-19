"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

// Mock data for demonstration
const mockRecipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    time: "30 min",
    servings: 4,
    difficulty: "Easy",
    calories: 450,
    cuisine: "Italian",
    price: 12,
    ingredients: ["pasta", "garlic", "cream", "parmesan", "butter", "salt", "pepper"],
    instructions: [
      "Boil pasta according to package instructions",
      "In a pan, sauté minced garlic in butter",
      "Add cream and bring to simmer",
      "Add cooked pasta and parmesan",
      "Season with salt and pepper"
    ],
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80",
    author: {
      name: "Chef John",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    rating: 4.8,
    favorites: 245,
    hasAllIngredients: 0.8
  },
  // Add more mock recipes
];

const cuisineOptions = [
  "Any",
  "Italian",
  "Japanese",
  "Mexican",
  "Indian",
  "Chinese",
  "Thai",
  "Mediterranean",
  "French",
  "American"
];

interface RecipeModalProps {
  recipe: any;
  onClose: () => void;
}

const RecipeModal = ({ recipe, onClose }: RecipeModalProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50"
    >
      <div className="min-h-full">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
            <button 
              onClick={onClose}
              className="flex items-center space-x-2 text-gray-900 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm">Back to Recipes</span>
            </button>
            <div className="flex items-center space-x-6">
              <button className="text-sm text-gray-900 hover:text-gray-600">Share</button>
              <button className="text-sm text-gray-900 hover:text-gray-600">Save</button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-8 py-12">
          <div className="grid grid-cols-5 gap-12">
            {/* Main Content - 3 columns */}
            <div className="col-span-3">
              <div className="aspect-[4/3] relative mb-8">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mb-12">
                <div className="uppercase tracking-wide text-gray-500 text-sm mb-2">RECIPES</div>
                <h1 className="text-3xl font-normal text-gray-900 mb-6">{recipe.title}</h1>
                <p className="text-gray-600 leading-relaxed">{recipe.description || "A delicious recipe that combines fresh ingredients with simple preparation for a wonderful dining experience. Perfect for any occasion, this dish brings together classic flavors in a modern way."}</p>
              </div>

              <div className="flex items-center space-x-12 py-6 border-t border-b border-gray-200 mb-12">
                <div>
                  <div className="uppercase tracking-wide text-gray-500 text-xs mb-1">PREP TIME</div>
                  <div className="text-gray-900">{recipe.time}</div>
                </div>
                <div>
                  <div className="uppercase tracking-wide text-gray-500 text-xs mb-1">COOK TIME</div>
                  <div className="text-gray-900">25 mins</div>
                </div>
                <div>
                  <div className="uppercase tracking-wide text-gray-500 text-xs mb-1">SERVES</div>
                  <div className="text-gray-900">{recipe.servings}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h2 className="text-gray-900 font-normal mb-6">Ingredients</h2>
                  <ul className="space-y-4">
                    {recipe.ingredients.map((ingredient: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-0" />
                        <span className="text-gray-600">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-gray-900 font-normal mb-6">Preparation</h2>
                  <ol className="space-y-6">
                    {recipe.instructions.map((instruction: string, index: number) => (
                      <li key={index} className="flex items-start space-x-4">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500">
                          {index + 1}
                        </span>
                        <span className="flex-1 text-gray-600">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Comments Section - 2 columns */}
            <div className="col-span-2 border-l border-gray-200 pl-12">
              <h2 className="text-gray-900 font-normal mb-6">Comments</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gray-100" />
                  </div>
                  <div className="flex-1">
                    <textarea 
                      rows={3}
                      className="w-full rounded-none border-gray-200 focus:border-gray-300 focus:ring-0 resize-none text-gray-600 placeholder-gray-400"
                      placeholder="Share your experience with this recipe..."
                    />
                    <div className="mt-2 flex justify-end">
                      <button className="px-4 py-2 text-sm text-gray-900 hover:text-gray-600">
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function RecipesPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [budget, setBudget] = useState<number | "">("");
  const [servings, setServings] = useState<number>(2);
  const [cuisine, setCuisine] = useState("Any");

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">Find Your Perfect Recipe</h1>
            <p className="text-gray-700 text-center mb-12">Discover recipes that match your budget and preferences</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="p-4">
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Your Budget
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">$</span>
                    <input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value ? Number(e.target.value) : "")}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-0"
                      placeholder="500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="p-4">
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Servings
                  </label>
                  <select
                    value={servings}
                    onChange={(e) => setServings(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-0 appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>{num} servings</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="p-4">
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Cuisine
                  </label>
                  <select
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-0 appearance-none"
                  >
                    {cuisineOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipes, ingredients, or cuisines..."
                className="w-full px-6 py-4 rounded-full border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-0 pr-12 shadow-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mockRecipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-lg"
                onClick={() => setSelectedRecipe(recipe)}
              >
                <div className="relative h-56">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white mb-2">
                      <span className="text-sm font-medium">Ingredients you have</span>
                      <span className="text-sm font-medium">{Math.round(recipe.hasAllIngredients * 100)}%</span>
                    </div>
                    <div className="h-1.5 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-300"
                        style={{ width: `${recipe.hasAllIngredients * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{recipe.title}</h3>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">{recipe.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <span>{recipe.time}</span>
                      <span>•</span>
                      <span>{recipe.difficulty}</span>
                      <span>•</span>
                      <span className="font-medium">${recipe.price}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{recipe.favorites}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedRecipe && (
            <RecipeModal 
              recipe={selectedRecipe} 
              onClose={() => setSelectedRecipe(null)} 
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
