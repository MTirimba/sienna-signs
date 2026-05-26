import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Serve files from src/Media as /Media/*
  async rewrites() {
    return []
  },
}

export default nextConfig