'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// Mock data for demonstration
const mockRecipe = {
  id: 1,
  title: 'Vegetable Stir Fry',
  image: '/recipes/stir-fry.jpg',
  budget: '$8.50',
  servings: 4,
  time: '25 mins',
  ingredients: [
    { name: 'Rice', amount: '2 cups', cost: '$2.50' },
    { name: 'Mixed Vegetables', amount: '4 cups', cost: '$3.00' },
    { name: 'Soy Sauce', amount: '3 tbsp', cost: '$1.00' },
    { name: 'Garlic', amount: '3 cloves', cost: '$0.50' },
    { name: 'Ginger', amount: '1 inch', cost: '$0.50' },
    { name: 'Vegetable Oil', amount: '2 tbsp', cost: '$0.50' },
    { name: 'Green Onions', amount: '2 stalks', cost: '$0.50' }
  ],
  alternatives: [
    { name: 'Rice', original: '$2.50', alternative: 'Quinoa ($2.00)' },
    { name: 'Mixed Vegetables', original: '$3.00', alternative: 'Frozen Vegetables ($2.50)' }
  ],
  instructions: [
    'Cook rice according to package instructions.',
    'Heat oil in a large wok or skillet over medium-high heat.',
    'Add minced garlic and ginger, stir for 30 seconds until fragrant.',
    'Add mixed vegetables and stir-fry for 5-7 minutes until tender-crisp.',
    'Add soy sauce and stir to combine.',
    'Serve over cooked rice and garnish with chopped green onions.'
  ],
  tips: [
    'For extra protein, add tofu or chicken.',
    'Use fresh vegetables for best texture, but frozen works in a pinch.',
    'Adjust soy sauce to taste preference.'
  ]
}

export default function RecipeDetail() {
  const params = useParams()
  const recipeId = params.id

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/recipes/search"
          className="text-primary hover:text-primary-dark font-semibold mb-8 inline-block"
        >
          ← Back to results
        </Link>

        <div className="card">
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={mockRecipe.image}
              alt={mockRecipe.title}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold mb-4">{mockRecipe.title}</h1>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Budget</div>
              <div className="text-xl font-semibold">{mockRecipe.budget}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Servings</div>
              <div className="text-xl font-semibold">{mockRecipe.servings}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Time</div>
              <div className="text-xl font-semibold">{mockRecipe.time}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {mockRecipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{ingredient.name} ({ingredient.amount})</span>
                    <span className="text-primary">{ingredient.cost}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">Cost-Effective Alternatives</h2>
              <ul className="space-y-2">
                {mockRecipe.alternatives.map((alt, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{alt.name}:</span>
                    <span className="text-primary">{alt.alternative}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <ol className="space-y-4">
                {mockRecipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>

              <h2 className="text-xl font-semibold mt-8 mb-4">Tips</h2>
              <ul className="space-y-2">
                {mockRecipe.tips.map((tip, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
  )
} 