/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: async () => {
        return [
            {
              source: '/(.*)', // Match all routes
              headers: [
                { key: 'Cross-Origin-Embedder-Policy', value: 'unsafe-none' }, // Disable COEP if not needed
              ],
            },
          ];
        // return [
        //     {
        //         source: '/(.*)', // Apply to all routes
        //         headers: [
        //           { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        //           { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        //         ],
        //       },
        // ];
    }
};

export default nextConfig;
