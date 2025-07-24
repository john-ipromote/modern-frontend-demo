import Link from 'next/link'
import { Box, Container, Flex, Text, Heading, Card, Button } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <Container size="4">
      <Box className="text-center mb-12">
        <Heading size="9" mb="6">
          Modern Frontend Demo
        </Heading>
        <Text size="6" color="gray" mb="8">
          A concise demonstration of modern frontend development practices
        </Text>
      </Box>

      <Card size="3" mb="8">
        <Heading size="6" mb="4">
          About This Project
        </Heading>
        <Text color="gray" mb="6" style={{ lineHeight: '1.6' }}>
          This project serves as a comprehensive demo showcasing modern frontend development 
          technologies and best practices. Built with Next.js, React, Tailwind CSS, and 
          Radix Themes, it demonstrates how to create aesthetically pleasing, 
          interactive web applications with features like dark mode, responsive design, 
          and comprehensive testing.
        </Text>
        
        <Flex gap="4" direction={{ initial: 'column', sm: 'row' }}>
          <Button asChild size="3">
            <a
              href="https://github.com/john-ipromote/modern-frontend-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon />
              View Source Code
            </a>
          </Button>
          <Button asChild variant="outline" size="3">
            <Link href="/libraries">
              Explore Libraries
            </Link>
          </Button>
        </Flex>
      </Card>

      <Flex gap="6" direction={{ initial: 'column', md: 'row' }}>
        <Card size="2" style={{ flex: 1 }}>
          <Heading size="4" mb="3">
            Modern Stack
          </Heading>
          <Text color="gray" size="2">
            Built with Next.js, React, TypeScript, and Radix Themes for optimal performance and developer experience.
          </Text>
        </Card>
        
        <Card size="2" style={{ flex: 1 }}>
          <Heading size="4" mb="3">
            Interactive Design
          </Heading>
          <Text color="gray" size="2">
            Features dark mode toggle, responsive design, and engaging hover effects throughout the application.
          </Text>
        </Card>
        
        <Card size="2" style={{ flex: 1 }}>
          <Heading size="4" mb="3">
            Comprehensive Testing
          </Heading>
          <Text color="gray" size="2">
            Includes unit tests, integration tests with Playwright, and CI/CD pipeline for automated deployment.
          </Text>
        </Card>
      </Flex>
    </Container>
  );
}
