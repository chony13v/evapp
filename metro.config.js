// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// 👇 Habilita subpath exports (necesario para 'firebase/auth/react-native')
config.resolver.unstable_enablePackageExports = true;

// (opcional) prioriza 'react-native' en resolución
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

module.exports = config;
