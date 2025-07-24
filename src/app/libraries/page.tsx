'use client'

import { useState } from 'react'
import { Box, Container, Flex, Text, Heading, Card } from '@radix-ui/themes'
import { ExternalLinkIcon } from '@radix-ui/react-icons'

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
    name: "Radix Themes",
    shortDescription: "A modern theming system and component library built on top of Radix Primitives.",
    longDescription: "Radix Themes provides a complete design system with semantic color scales, responsive design tokens, and accessible components out of the box. It includes built-in dark mode support and integrates seamlessly with Tailwind CSS. The system is highly customizable while maintaining excellent accessibility standards.",
    url: "https://www.radix-ui.com/themes"
  }
]

export default function LibrariesPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <Container size="4">
      <Box className="text-center mb-12">
        <Heading size="8" mb="6">
          Libraries & Technologies
        </Heading>
        <Text size="5" color="gray">
          Explore the modern technologies powering this demo application
        </Text>
      </Box>

      <Flex gap="4" direction="column" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {libraries.map((library) => (
          <Card
            key={library.name}
            size="2"
            style={{
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              transform: hoveredCard === library.name ? 'scale(1.02)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredCard(library.name)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Flex justify="between" align="start" mb="3">
              <Heading size="5">
                {library.name}
              </Heading>
              <a
                href={library.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ color: 'var(--accent-9)' }}
              >
                <ExternalLinkIcon />
              </a>
            </Flex>
            
            <Box
              style={{
                transition: 'all 0.3s ease-in-out',
                minHeight: hoveredCard === library.name ? '140px' : '80px'
              }}
            >
              <Text color="gray" size="2" mb="3" style={{ lineHeight: '1.5' }}>
                {library.shortDescription}
              </Text>
              
              <Box
                style={{
                  transition: 'all 0.3s ease-in-out',
                  overflow: 'hidden',
                  maxHeight: hoveredCard === library.name ? '128px' : '0',
                  opacity: hoveredCard === library.name ? 1 : 0
                }}
              >
                <Box style={{ borderTop: '1px solid var(--gray-6)', paddingTop: '12px' }}>
                  <Text color="gray" size="1" style={{ lineHeight: '1.5' }}>
                    {library.longDescription}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
      </Flex>

      <Box className="mt-12 text-center">
        <Text color="gray">
          Hover over each card to see detailed descriptions and explore the technologies in action.
        </Text>
      </Box>
    </Container>
  )
}
