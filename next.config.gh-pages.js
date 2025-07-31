/** @type {import('next').NextConfig} */
const nextConfig = {
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
