import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
        // ⚠️ Atenção: Isso ignora erros de TypeScript durante a produção
        ignoreBuildErrors: true,
    },
    sassOptions: {
        additionalData: `$var: red;`,
    },
};

export default nextConfig;
