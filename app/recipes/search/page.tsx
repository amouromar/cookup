"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Mock data for demonstration
const mockRecipes = [
  {
    id: 1,
    title: "Vegetable Stir Fry",
    image: "/recipes/stir-fry.jpg",
    budget: "$8.50",
    servings: 4,
    time: "25 mins",
    ingredients: ["Rice", "Mixed Vegetables", "Soy Sauce", "Garlic", "Ginger"],
    alternatives: [
      { name: "Rice", original: "$2.50", alternative: "Quinoa ($2.00)" },
      {
        name: "Mixed Vegetables",
        original: "$3.00",
        alternative: "Frozen Vegetables ($2.50)",
      },
    ],
  },
  {
    id: 2,
    title: "Pasta Primavera",
    image: "/recipes/pasta.jpg",
    budget: "$7.25",
    servings: 4,
    time: "30 mins",
    ingredients: ["Pasta", "Bell Peppers", "Zucchini", "Tomatoes", "Parmesan"],
    alternatives: [
      {
        name: "Pasta",
        original: "$1.50",
        alternative: "Whole Wheat Pasta ($1.75)",
      },
      { name: "Parmesan", original: "$2.00", alternative: "Pecorino ($1.75)" },
    ],
  },
  {
    id: 3,
    title: "Chicken Curry",
    image: "/recipes/curry.jpg",
    budget: "$9.75",
    servings: 4,
    time: "45 mins",
    ingredients: [
      "Chicken",
      "Curry Paste",
      "Coconut Milk",
      "Rice",
      "Vegetables",
    ],
    alternatives: [
      { name: "Chicken", original: "$4.00", alternative: "Tofu ($2.50)" },
      {
        name: "Coconut Milk",
        original: "$2.00",
        alternative: "Yogurt ($1.50)",
      },
    ],
  },
];

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const budget = searchParams.get("budget");
  const servings = searchParams.get("servings");

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            Recipes for ${budget} per meal ({servings} servings)
          </h1>
          <Link
            href="/recipes"
            className="text-primary hover:text-primary-dark font-semibold"
          >
            ← Back to search
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRecipes.map((recipe) => (
            <div key={recipe.id} className="card group">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>Budget: {recipe.budget}</span>
                <span>{recipe.time}</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Cost-Effective Alternatives:</h3>
                <ul className="text-sm space-y-1">
                  {recipe.alternatives.map((alt, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{alt.name}:</span>
                      <span className="text-primary">{alt.alternative}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/recipes/${recipe.id}`}
                className="btn-primary w-full mt-4"
              >
                View Recipe
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Get unlimited access to all recipes for just $10/month
          </p>
          <Link
            href="/signup"
            className="text-primary hover:text-primary-dark font-semibold"
          >
            Start your free trial →
          </Link>
        </div>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card">
              <div className="h-48 mb-4 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchResults() {
  return (
    <Suspense fallback={<LoadingState />}>
      <SearchResultsContent />
    </Suspense>
  );
}
