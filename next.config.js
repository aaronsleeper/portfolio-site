/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	basePath: '/portfolio-site',
	assetPrefix: '/portfolio-site/',
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'videos.openai.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
