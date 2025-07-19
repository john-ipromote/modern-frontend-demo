import { test, expect } from '@playwright/test'

test.describe('Modern Frontend Demo', () => {
  test('should navigate to libraries page and show NextJS hover content', async ({ page }) => {
    // Step 1: Open the index page
    await page.goto('http://localhost:3000')
    
    // Verify we're on the index page
    await expect(page).toHaveTitle('Modern Frontend Demo')
    await expect(page.getByRole('heading', { name: 'Modern Frontend Demo' })).toBeVisible()
    
    // Step 2: Navigate to the Libraries page
    await page.getByRole('link', { name: 'Libraries', exact: true }).click()
    
    // Verify we're on the libraries page
    await expect(page.getByRole('heading', { name: 'Libraries & Technologies' })).toBeVisible()
    
    // Step 3: Hover over the NextJS item
    const nextjsCard = page.getByText('Next.jsNextJS is a production')
    await nextjsCard.hover()
    
    // Step 4: Check for the hover text content
    // Verify the short description is visible
    await expect(page.getByText('NextJS is a production-ready React framework that handles server-side rendering and routing out of the box.')).toBeVisible()
    
    // Verify the detailed hover description is visible
    await expect(page.getByText('It eliminates configuration overhead by providing opinionated defaults for bundling, code splitting, and deployment while maintaining flexibility for customization. The framework supports hybrid rendering approaches, allowing pages to be generated statically at build time or dynamically on the server based on your application\'s needs.')).toBeVisible()
  })

  test('should toggle dark mode', async ({ page }) => {
    await page.goto('http://localhost:3000')
    
    // Click the dark mode toggle
    await page.getByRole('button', { name: 'Toggle dark mode' }).click()
    
    // Verify dark mode is applied (check for dark class on html element)
    await expect(page.locator('html')).toHaveClass(/dark/)
  })

  test('should have working navigation', async ({ page }) => {
    await page.goto('http://localhost:3000')
    
    // Test navigation to Libraries page
    await page.getByRole('link', { name: 'Libraries', exact: true }).click()
    await expect(page).toHaveURL('http://localhost:3000/libraries')
    
    // Test navigation to Build & Test page
    await page.getByRole('link', { name: 'Build & Test' }).click()
    await expect(page).toHaveURL('http://localhost:3000/build-test')
    
    // Test navigation back to Home
    await page.getByRole('link', { name: 'Home' }).click()
    await expect(page).toHaveURL('http://localhost:3000/')
  })

  test('should have GitHub link on homepage', async ({ page }) => {
    await page.goto('http://localhost:3000')
    
    // Verify GitHub link exists and has correct URL
    const githubLink = page.getByRole('link', { name: 'View Source Code' })
    await expect(githubLink).toBeVisible()
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/john-ipromote/modern-frontend-demo')
  })
})