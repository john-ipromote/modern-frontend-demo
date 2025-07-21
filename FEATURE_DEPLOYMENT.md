# Feature Branch Deployment Implementation

This document explains the implementation of feature branch deployments for the modern-frontend-demo project.

## Overview

The project now supports automatic deployments of `copilot/*` branches to GitHub Pages with branch-specific URLs.

## Changes Made

### 1. CI/CD Workflow (.github/workflows/ci-cd.yml)

**Before:**
- Triggered on pushes to `main` and pull requests to `main`
- Ran tests for all triggers
- Deployed only on `main` branch

**After:**
- Triggers on pushes to `main` and `copilot/**` branches
- Triggers on closed pull requests to `main` branch
- Tests run **only** on `main` branch pushes
- Three deployment jobs:
  - `deploy-main`: Deploys main branch to root GitHub Pages
  - `deploy-feature`: Deploys copilot/* branches to subdirectories
  - `cleanup-feature`: Removes feature deployments when PRs are closed/merged

### 2. Next.js Configuration (next.config.ts)

**Dynamic basePath Logic:**
- **Development**: No basePath (empty string)
- **Production (main branch)**: `/modern-frontend-demo`
- **Production (feature branch)**: Uses `NEXT_PUBLIC_BASE_PATH` environment variable

### 3. Deployment URLs

- **Main branch**: `https://john-ipromote.github.io/modern-frontend-demo/`
- **Feature branches**: `https://john-ipromote.github.io/modern-frontend-demo/{branch-name}/`

Example: `copilot/fix-13` branch → `https://john-ipromote.github.io/modern-frontend-demo/copilot/fix-13/`

## How It Works

### Feature Branch Deployment Process

1. Push to any `copilot/*` branch
2. GitHub Actions workflow triggered
3. Branch name extracted from `GITHUB_REF`
4. Build with custom basePath: `/modern-frontend-demo/{branch-name}`
5. Deploy to GitHub Pages subdirectory using `peaceiris/actions-gh-pages`

### Feature Branch Cleanup Process

1. Close or merge a pull request from a `copilot/*` branch
2. GitHub Actions cleanup workflow triggered
3. Checkout the `gh-pages` branch
4. Remove the corresponding feature branch directory
5. Commit and push the cleanup to `gh-pages`

### Environment Variables

- `GITHUB_ACTIONS`: Indicates CI environment
- `NODE_ENV`: Set to 'production' for static export
- `NEXT_PUBLIC_BASE_PATH`: Custom basePath for feature branches

## Testing

All functionality has been verified:

✅ Development build uses no basePath  
✅ Main branch uses `/modern-frontend-demo` basePath  
✅ Feature branches use custom basePath  
✅ Workflow triggers correctly on copilot branches  
✅ Tests only run on main branch  
✅ Feature deployment job exists
✅ Cleanup job removes deployments on PR close/merge

## Benefits

1. **Faster Feedback**: See changes immediately without merging
2. **No Test Overhead**: Feature branches skip test execution for faster deploys
3. **Parallel Development**: Multiple feature branches can be deployed simultaneously
4. **Main Branch Stability**: Full test suite still runs on main branch
5. **Automatic Cleanup**: Feature deployments are automatically removed when PRs are closed or merged

## Usage

To deploy a feature branch:
1. Create a branch with `copilot/` prefix (e.g., `copilot/new-feature`)
2. Push commits to the branch
3. Deployment will be available at `https://john-ipromote.github.io/modern-frontend-demo/copilot/new-feature/`

To clean up a feature deployment:
1. Open a pull request from your `copilot/*` branch to `main`
2. Close or merge the pull request
3. The feature deployment will be automatically removed from GitHub Pages