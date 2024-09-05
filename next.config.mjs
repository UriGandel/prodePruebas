// next.config.mjs
export default {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Excluye sequelize del empaquetado del lado del servidor
      config.externals = [...config.externals, 'sequelize'];
    }

    return config;
  },
};
