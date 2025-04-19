"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

const features = [
  "Unlimited recipe access",
  "Budget optimization",
  "Ingredient alternatives",
  "Detailed cost breakdowns",
  "High-quality recipe images",
  "Full recipe instructions",
  "Shopping lists",
  "Meal planning tools",
];

export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get started with 3 free recipe views, then unlock unlimited access
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Free Trial</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try before you buy
                </p>
                <div className="text-4xl font-bold mb-6">$0</div>
                <ul className="space-y-4 mb-8">
                  {features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
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
                  <li className="flex items-center text-gray-500">
                    <svg
                      className="w-5 h-5 mr-2"
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
                    3 recipe views
                  </li>
                </ul>
                <Link href="/recipes" className="btn-primary w-full">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="card border-2 border-primary">
              <div className="text-center">
                <div className="bg-primary text-white py-1 px-4 rounded-full text-sm font-semibold inline-block mb-4">
                  Most Popular
                </div>
                <h2 className="text-2xl font-bold mb-2">Premium</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Unlimited access to all features
                </p>
                <div className="text-4xl font-bold mb-6">
                  $10<span className="text-lg text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
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
                <Link href="/signup" className="btn-primary w-full">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="font-semibold mb-2">
                  How does the free trial work?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You get 3 free recipe views to try out the service. After
                  that, you&apos;ll need to subscribe to continue accessing
                  recipes.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, you can cancel your subscription at any time. You&apos;ll
                  continue to have access until the end of your billing period.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">How are recipes priced?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Recipe costs are based on current market prices and include
                  cost-effective alternatives to help you save money.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">
                  Is there a student discount?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! Students can get 50% off with a valid .edu email address.
                  Contact support for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
