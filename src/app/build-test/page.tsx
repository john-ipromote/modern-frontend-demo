'use client'

import { useState } from 'react'
import { Box, Container, Flex, Text, Heading, Card, Badge } from '@radix-ui/themes'
import { ExternalLinkIcon, CheckIcon } from '@radix-ui/react-icons'

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
          features: ["Lightning-fast installs", "Built-in bundler", "TypeScript support", "Drop-in Node.js replacement"],
          url: "https://bun.sh"
        },
        {
          name: "Next.js Build System",
          description: "Production-ready build pipeline with automatic optimization and code splitting.",
          longDescription: "Next.js provides a comprehensive build system that handles everything from compilation to optimization. It automatically splits code, optimizes images, and generates static or server-rendered pages based on your needs.",
          features: ["Static site generation", "Server-side rendering", "Automatic code splitting", "Image optimization"],
          url: "https://nextjs.org"
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
          features: ["Zero configuration", "Snapshot testing", "Mocking capabilities", "Coverage reports"],
          url: "https://jestjs.io"
        },
        {
          name: "Playwright",
          description: "Modern end-to-end testing framework for web applications.",
          longDescription: "Playwright enables reliable end-to-end testing across all modern browsers including Chrome, Firefox, and Safari. It provides powerful testing capabilities with auto-waiting, network interception, and comprehensive debugging tools.",
          features: ["Cross-browser testing", "Auto-waiting", "Network interception", "Mobile emulation"],
          url: "https://playwright.dev"
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
          features: ["Matrix builds", "Secrets management", "Marketplace actions", "Event-driven workflows"],
          url: "https://github.com/features/actions"
        },
        {
          name: "GitHub Pages",
          description: "Static site hosting directly from GitHub repository.",
          longDescription: "GitHub Pages provides free hosting for static websites directly from your GitHub repository. It offers custom domain support, HTTPS by default, and seamless integration with GitHub Actions for automatic deployments.",
          features: ["Free hosting", "Custom domains", "HTTPS by default", "Automatic deployments"],
          url: "https://pages.github.com"
        }
      ]
    }
  ]

  return (
    <Container size="4">
      <Box className="text-center mb-12">
        <Heading size="8" mb="6">
          Build & Test Infrastructure
        </Heading>
        <Text size="5" color="gray">
          Comprehensive tooling for modern development workflows
        </Text>
      </Box>

      <Flex direction="column" gap="9">
        {tools.map((section) => (
          <Box key={section.category}>
            <Heading size="7" mb="8" align="center">
              {section.category}
            </Heading>
            
            <Flex gap="6" direction={{ initial: 'column', lg: 'row' }}>
              {section.items.map((tool) => (
                <Card
                  key={tool.name}
                  size="3"
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    transform: hoveredCard === tool.name ? 'scale(1.02)' : 'scale(1)',
                    flex: 1
                  }}
                  onMouseEnter={() => setHoveredCard(tool.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Flex justify="between" align="start" mb="4">
                    <Heading size="6">
                      {tool.name}
                    </Heading>
                    <a
                      href={tool.url}
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
                      minHeight: hoveredCard === tool.name ? '200px' : '120px'
                    }}
                  >
                    <Text color="gray" mb="6" style={{ lineHeight: '1.6' }}>
                      {tool.description}
                    </Text>
                    
                    <Box
                      style={{
                        transition: 'all 0.3s ease-in-out',
                        overflow: 'hidden',
                        maxHeight: hoveredCard === tool.name ? '160px' : '0',
                        opacity: hoveredCard === tool.name ? 1 : 0,
                        marginBottom: hoveredCard === tool.name ? '24px' : '0'
                      }}
                    >
                      <Box style={{ borderTop: '1px solid var(--gray-6)', paddingTop: '16px' }}>
                        <Text color="gray" size="2" style={{ lineHeight: '1.6' }}>
                          {tool.longDescription}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box
                    style={{
                      transition: 'all 0.3s ease-in-out',
                      overflow: 'hidden',
                      maxHeight: hoveredCard === tool.name ? '384px' : '0',
                      opacity: hoveredCard === tool.name ? 1 : 0
                    }}
                  >
                    {hoveredCard === tool.name && (
                      <Box style={{ borderTop: '1px solid var(--gray-6)', paddingTop: '16px' }}>
                        <Heading size="4" mb="3">
                          Key Features
                        </Heading>
                        <Flex direction="column" gap="2">
                          {tool.features.map((feature, index) => (
                            <Flex key={index} align="start" gap="3">
                              <CheckIcon style={{ color: 'var(--green-9)', marginTop: '2px', flexShrink: 0 }} />
                              <Text color="gray" size="2">{feature}</Text>
                            </Flex>
                          ))}
                        </Flex>
                      </Box>
                    )}
                  </Box>
                </Card>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>

      <Box className="mt-12 text-center">
        <Text color="gray">
          Hover over each tool card to see detailed descriptions and explore the development infrastructure.
        </Text>
      </Box>

      <Card size="3" className="mt-8" style={{ background: 'var(--gray-2)' }}>
        <Heading size="7" mb="6" align="center">
          Development Workflow
        </Heading>
        
        <Flex gap="6" direction={{ initial: 'column', md: 'row' }}>
          <Flex direction="column" align="center" style={{ flex: 1 }}>
            <Box 
              style={{ 
                background: 'var(--blue-9)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '48px', 
                height: '48px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}
            >
              1
            </Box>
            <Heading size="3" mb="2">Code</Heading>
            <Text size="2" color="gray" align="center">
              Develop with TypeScript, React, and Tailwind CSS
            </Text>
          </Flex>
          
          <Flex direction="column" align="center" style={{ flex: 1 }}>
            <Box 
              style={{ 
                background: 'var(--green-9)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '48px', 
                height: '48px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}
            >
              2
            </Box>
            <Heading size="3" mb="2">Test</Heading>
            <Text size="2" color="gray" align="center">
              Run unit tests with Jest and E2E tests with Playwright
            </Text>
          </Flex>
          
          <Flex direction="column" align="center" style={{ flex: 1 }}>
            <Box 
              style={{ 
                background: 'var(--yellow-9)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '48px', 
                height: '48px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}
            >
              3
            </Box>
            <Heading size="3" mb="2">Build</Heading>
            <Text size="2" color="gray" align="center">
              Compile and optimize with Bun and Next.js
            </Text>
          </Flex>
          
          <Flex direction="column" align="center" style={{ flex: 1 }}>
            <Box 
              style={{ 
                background: 'var(--purple-9)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '48px', 
                height: '48px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}
            >
              4
            </Box>
            <Heading size="3" mb="2">Deploy</Heading>
            <Text size="2" color="gray" align="center">
              Automatic deployment to GitHub Pages via Actions
            </Text>
          </Flex>
        </Flex>
      </Card>

      <Card size="3" className="mt-12">
        <Heading size="5" mb="4" align="center">
          Integration Test Example
        </Heading>
        <Text color="gray" mb="4" align="center">
          Our Playwright integration test demonstrates the complete user flow:
        </Text>
        <Flex wrap="wrap" justify="center" gap="2" align="center">
          <Badge color="blue">Open Index Page</Badge>
          <Text color="gray">→</Text>
          <Badge color="green">Navigate to Libraries</Badge>
          <Text color="gray">→</Text>
          <Badge color="yellow">Hover over Next.js</Badge>
          <Text color="gray">→</Text>
          <Badge color="purple">Verify Hover Text</Badge>
        </Flex>
      </Card>
    </Container>
  )
}