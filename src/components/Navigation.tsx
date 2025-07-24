'use client'

import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import { Box, Container, Flex, Text, IconButton } from '@radix-ui/themes'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

export default function Navigation() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Box asChild>
      <nav style={{ borderBottom: '1px solid var(--gray-6)' }}>
        <Container size="4">
          <Flex justify="between" align="center" py="4">
            <Flex align="center" gap="6">
              <Link 
                href="/" 
                style={{ textDecoration: 'none' }}
              >
                <Text size="5" weight="bold" color="gray" className="hover:color-blue transition-colors">
                  Modern Frontend Demo
                </Text>
              </Link>
              <Flex gap="4" className="hidden md:flex">
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Text size="3" color="gray" className="hover:color-blue transition-colors px-3 py-2">
                    Home
                  </Text>
                </Link>
                <Link href="/libraries" style={{ textDecoration: 'none' }}>
                  <Text size="3" color="gray" className="hover:color-blue transition-colors px-3 py-2">
                    Libraries
                  </Text>
                </Link>
                <Link href="/build-test" style={{ textDecoration: 'none' }}>
                  <Text size="3" color="gray" className="hover:color-blue transition-colors px-3 py-2">
                    Build & Test
                  </Text>
                </Link>
              </Flex>
            </Flex>
            
            <IconButton
              variant="ghost"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </Flex>
          
          {/* Mobile menu */}
          <Box className="md:hidden">
            <Flex direction="column" gap="2" pb="3" style={{ borderTop: '1px solid var(--gray-6)' }} pt="3">
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Text size="3" color="gray" className="hover:color-blue block px-3 py-2">
                  Home
                </Text>
              </Link>
              <Link href="/libraries" style={{ textDecoration: 'none' }}>
                <Text size="3" color="gray" className="hover:color-blue block px-3 py-2">
                  Libraries
                </Text>
              </Link>
              <Link href="/build-test" style={{ textDecoration: 'none' }}>
                <Text size="3" color="gray" className="hover:color-blue block px-3 py-2">
                  Build & Test
                </Text>
              </Link>
            </Flex>
          </Box>
        </Container>
      </nav>
    </Box>
  )
}