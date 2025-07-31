/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
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
