import createMDX from '@next/mdx'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkUnwrapImages from 'remark-unwrap-images'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkMath, remarkUnwrapImages],
    rehypePlugins: [rehypeKatex],
  },
})

export default withMDX(nextConfig)
