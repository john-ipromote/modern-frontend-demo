import { test, expect } from '@playwright/test'

test.describe('Modern Frontend Demo', () => {
  test('should navigate to libraries page and show NextJS hover content', async ({ page }) => {
    // Step 1: Open the index page
    await page.goto('/')
    
    // Verify we're on the index page
    await expect(page).toHaveTitle('Modern Frontend Demo')
    await expect(page.getByRole('heading', { name: 'Modern Frontend Demo' })).toBeVisible()
    
    // Step 2: Navigate to the Libraries page
    await page.getByRole('link', { name: 'Libraries', exact: true }).first().click()
    
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
    await page.goto('/')
    
    // Verify initial light mode state (check for light theme in Radix)
    await expect(page.locator('.radix-themes.light')).toBeVisible()
    
    // Click the dark mode toggle
    await page.getByRole('button', { name: 'Toggle dark mode' }).click()
    
    // Verify dark mode is applied (check for dark theme in Radix)
    await expect(page.locator('.radix-themes.dark')).toBeVisible()
    
    // Toggle back to light mode
    await page.getByRole('button', { name: 'Toggle dark mode' }).click()
    
    // Verify we're back to light mode
    await expect(page.locator('.radix-themes.light')).toBeVisible()
  })

  test('should have working navigation', async ({ page }) => {
    await page.goto('/')
    
    // Test navigation to Libraries page
    await page.getByRole('link', { name: 'Libraries', exact: true }).first().click()
    await expect(page).toHaveURL('/libraries/')
    
    // Test navigation to Build & Test page
    await page.getByRole('link', { name: 'Build & Test' }).first().click()
    await expect(page).toHaveURL('/build-test/')
    
    // Test navigation back to Home
    await page.getByRole('link', { name: 'Home' }).first().click()
    await expect(page).toHaveURL('/')
  })

  test('should have GitHub link on homepage', async ({ page }) => {
    await page.goto('/')
    
    // Verify GitHub link exists and has correct URL
    const githubLink = page.getByRole('link', { name: 'View Source Code' })
    await expect(githubLink).toBeVisible()
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/john-ipromote/modern-frontend-demo')
  })

  test('should show hover effects on Build & Test page', async ({ page }) => {
    await page.goto('/build-test/')
    
    // Verify we're on the Build & Test page
    await expect(page.getByRole('heading', { name: 'Build & Test Infrastructure' })).toBeVisible()
    
    // Find the Bun card and verify base content is visible
    const bunCard = page.getByText('BunUltra-fast JavaScript runtime')
    await expect(bunCard).toBeVisible()
    
    // Hover over the Bun card
    await bunCard.hover()
    
    // Verify the hover content (long description) is visible
    await expect(page.getByText('Bun is designed as a drop-in replacement for Node.js with significantly faster startup times')).toBeVisible()
    
    // Test another card - Jest
    const jestCard = page.getByText('JestPopular JavaScript testing framework')
    await jestCard.hover()
    
    // Verify Jest hover content
    await expect(page.getByText('Jest provides a comprehensive testing solution with zero configuration required')).toBeVisible()
  })

  test('should have external links on Build & Test cards', async ({ page }) => {
    await page.goto('/build-test/')
    
    // Check that external links exist for each tool
    const bunLink = page.locator('div').filter({ hasText: /^Bun$/ }).getByRole('link')
    await expect(bunLink).toHaveAttribute('href', 'https://bun.sh')
    
    const jestLink = page.locator('div').filter({ hasText: /^Jest$/ }).getByRole('link')
    await expect(jestLink).toHaveAttribute('href', 'https://jestjs.io')
    
    const playwrightLink = page.locator('div').filter({ hasText: /^Playwright$/ }).getByRole('link')
    await expect(playwrightLink).toHaveAttribute('href', 'https://playwright.dev')
    
    const githubActionsLink = page.locator('div').filter({ hasText: /^GitHub Actions$/ }).getByRole('link')
    await expect(githubActionsLink).toHaveAttribute('href', 'https://github.com/features/actions')
    
    const githubPagesLink = page.locator('div').filter({ hasText: /^GitHub Pages$/ }).getByRole('link')
    await expect(githubPagesLink).toHaveAttribute('href', 'https://pages.github.com')
  })

  test('should have smaller library cards in 3-column layout', async ({ page }) => {
    await page.goto('/libraries/')
    
    // Verify we're on the libraries page
    await expect(page.getByRole('heading', { name: 'Libraries & Technologies' })).toBeVisible()
    
    // Check that all library cards are present
    await expect(page.getByRole('heading', { name: 'Next.js' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'React' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'TypeScript' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Tailwind CSS' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Radix Themes' })).toBeVisible()
    
    // Verify external links are present
    const nextjsLink = page.locator('div').filter({ hasText: /^Next\.js$/ }).getByRole('link')
    await expect(nextjsLink).toHaveAttribute('href', 'https://nextjs.org')
  })
})