"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
export default function RecipesPage() {
  const router = useRouter();
  const [budget, setBudget] = useState("");
  const [servings, setServings] = useState("2");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/recipes/search?budget=${budget}&servings=${servings}`);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Find Your Perfect Recipe
          </h1>

          <form onSubmit={handleSearch} className="space-y-6">
            <div className="card">
              <label
                htmlFor="budget"
                className="block text-sm font-medium mb-2"
              >
                Your Budget (per meal)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="input pl-8"
                  placeholder="Enter your budget"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div className="card">
              <label
                htmlFor="servings"
                className="block text-sm font-medium mb-2"
              >
                Number of Servings
              </label>
              <select
                id="servings"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                className="input"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "serving" : "servings"}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-primary w-full py-3 text-lg">
              Find Recipes
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Get 3 free recipe views, then unlock unlimited access for just
              $10/month
            </p>
            <button
              onClick={() => router.push("/signup")}
              className="text-primary hover:text-primary-dark font-semibold"
            >
              Start your free trial →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
