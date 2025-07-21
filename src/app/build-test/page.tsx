'use client'

import { useState } from 'react'

export default function BuildTestPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const tools = [
    {
      category: "Build Tools",
      items: [
        {
          name: "Bun",
          description: "Ultra-fast JavaScript runtime and package manager used for building and running the application.",
          longDescription: "Bun is designed as a drop-in replacement for Node.js with significantly faster startup times and better performance. It includes a built-in bundler, transpiler, test runner, and package manager, reducing the need for multiple tools.",
          features: ["Lightning-fast installs", "Built-in bundler", "TypeScript support", "Drop-in Node.js replacement"]
        },
        {
          name: "Next.js Build System",
          description: "Production-ready build pipeline with automatic optimization and code splitting.",
          longDescription: "Next.js provides a comprehensive build system that handles everything from compilation to optimization. It automatically splits code, optimizes images, and generates static or server-rendered pages based on your needs.",
          features: ["Static site generation", "Server-side rendering", "Automatic code splitting", "Image optimization"]
        }
      ]
    },
    {
      category: "Testing Frameworks",
      items: [
        {
          name: "Jest",
          description: "Popular JavaScript testing framework for unit and integration tests.",
          longDescription: "Jest provides a comprehensive testing solution with zero configuration required. It includes built-in assertion libraries, mocking capabilities, and coverage reporting, making it ideal for both unit and integration testing.",
          features: ["Zero configuration", "Snapshot testing", "Mocking capabilities", "Coverage reports"]
        },
        {
          name: "Playwright",
          description: "Modern end-to-end testing framework for web applications.",
          longDescription: "Playwright enables reliable end-to-end testing across all modern browsers including Chrome, Firefox, and Safari. It provides powerful testing capabilities with auto-waiting, network interception, and comprehensive debugging tools.",
          features: ["Cross-browser testing", "Auto-waiting", "Network interception", "Mobile emulation"]
        }
      ]
    },
    {
      category: "CI/CD Pipeline",
      items: [
        {
          name: "GitHub Actions",
          description: "Automated workflows for building, testing, and deploying the application.",
          longDescription: "GitHub Actions integrates seamlessly with your repository to provide continuous integration and deployment workflows. It supports matrix builds, secrets management, and a vast marketplace of pre-built actions for comprehensive automation.",
          features: ["Matrix builds", "Secrets management", "Marketplace actions", "Event-driven workflows"]
        },
        {
          name: "GitHub Pages",
          description: "Static site hosting directly from GitHub repository.",
          longDescription: "GitHub Pages provides free hosting for static websites directly from your GitHub repository. It offers custom domain support, HTTPS by default, and seamless integration with GitHub Actions for automatic deployments.",
          features: ["Free hosting", "Custom domains", "HTTPS by default", "Automatic deployments"]
        }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Build & Test Infrastructure
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Comprehensive tooling for modern development workflows
        </p>
      </div>

      <div className="space-y-12">
        {tools.map((section) => (
          <div key={section.category}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {section.category}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {section.items.map((tool) => (
                <div
                  key={tool.name}
                  className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 cursor-pointer transition-all duration-300 ease-in-out transform ${
                    hoveredCard === tool.name 
                      ? 'scale-105 shadow-2xl ring-2 ring-blue-500 dark:ring-blue-400' 
                      : 'hover:shadow-xl'
                  }`}
                  onMouseEnter={() => setHoveredCard(tool.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {tool.name}
                  </h3>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    hoveredCard === tool.name ? 'min-h-[200px]' : 'min-h-[120px]'
                  }`}>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {tool.description}
                    </p>
                    
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      hoveredCard === tool.name 
                        ? 'max-h-40 opacity-100 mb-6' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {tool.longDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Hover over each tool card to see detailed descriptions and explore the development infrastructure.
        </p>
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Development Workflow
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Code</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Develop with TypeScript, React, and Tailwind CSS
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Test</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Run unit tests with Jest and E2E tests with Playwright
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Build</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Compile and optimize with Bun and Next.js
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Deploy</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Automatic deployment to GitHub Pages via Actions
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Integration Test Example
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our Playwright integration test demonstrates the complete user flow:
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
              Open Index Page
            </span>
            <span className="text-gray-400">→</span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
              Navigate to Libraries
            </span>
            <span className="text-gray-400">→</span>
            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
              Hover over Next.js
            </span>
            <span className="text-gray-400">→</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
              Verify Hover Text
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}