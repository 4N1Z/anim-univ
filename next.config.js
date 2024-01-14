/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        unoptimized:false,

        remotePatterns:[{
            protocol : 'https',
            hostname : 'flowbite.s3.amazonaws.com',
        }]
    }
}

module.exports = nextConfig
