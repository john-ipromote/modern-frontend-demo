'use client'

import { useState } from 'react'

interface Library {
  name: string
  shortDescription: string
  longDescription: string
  url: string
}

const libraries: Library[] = [
  {
    name: "Next.js",
    shortDescription: "NextJS is a production-ready React framework that handles server-side rendering and routing out of the box.",
    longDescription: "It eliminates configuration overhead by providing opinionated defaults for bundling, code splitting, and deployment while maintaining flexibility for customization. The framework supports hybrid rendering approaches, allowing pages to be generated statically at build time or dynamically on the server based on your application's needs.",
    url: "https://nextjs.org"
  },
  {
    name: "React",
    shortDescription: "A JavaScript library for building user interfaces with component-based architecture.",
    longDescription: "React enables developers to create reusable UI components and manage complex application state efficiently. It uses a virtual DOM for optimal performance and provides hooks for state management and side effects. The declarative programming model makes code more predictable and easier to debug.",
    url: "https://react.dev"
  },
  {
    name: "TypeScript",
    shortDescription: "A typed superset of JavaScript that compiles to plain JavaScript for enhanced development experience.",
    longDescription: "TypeScript adds static type definitions to JavaScript, enabling better tooling, early error detection, and improved code maintainability. It provides excellent IDE support with autocompletion, refactoring, and navigation features. The type system helps prevent runtime errors and makes large codebases more manageable.",
    url: "https://typescriptlang.org"
  },
  {
    name: "Tailwind CSS",
    shortDescription: "A utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
    longDescription: "Tailwind provides low-level utility classes that let you build custom designs directly in your markup. It eliminates the need to write custom CSS while maintaining design consistency across your application. The framework is highly customizable and includes a powerful purge system to keep file sizes minimal in production.",
    url: "https://tailwindcss.com"
  },
  {
    name: "Relix UI",
    shortDescription: "An open-source set of prebuilt UI components based on Tailwind CSS framework.",
    longDescription: "Relix UI provides a comprehensive collection of accessible, customizable components that work seamlessly with Tailwind CSS. It focuses on developer experience with TypeScript support and follows modern design principles. The components are production-ready and optimized for performance.",
    url: "https://www.npmjs.com/package/tw-relix"
  }
]

export default function LibrariesPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Libraries & Technologies
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Explore the modern technologies powering this demo application
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {libraries.map((library) => (
          <div
            key={library.name}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ease-in-out transform ${
              hoveredCard === library.name 
                ? 'scale-105 shadow-2xl ring-2 ring-blue-500 dark:ring-blue-400' 
                : 'hover:shadow-xl'
            }`}
            onMouseEnter={() => setHoveredCard(library.name)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {library.name}
              </h3>
              <a
                href={library.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            <div className={`transition-all duration-300 ease-in-out ${
              hoveredCard === library.name ? 'min-h-[180px]' : 'min-h-[100px]'
            }`}>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {library.shortDescription}
              </p>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                hoveredCard === library.name 
                  ? 'max-h-40 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {library.longDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Hover over each card to see detailed descriptions and explore the technologies in action.
        </p>
      </div>
    </div>
  )
}
