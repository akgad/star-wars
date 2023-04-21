const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@containers': 'src/containers',
        '@constants': 'src/constants',
        '@hoc': 'src/hoc',
        '@services': 'src/services',
        '@utils': 'src/utils',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@hooks': 'src/hooks',
        '@UI': 'src/components/UI',
        '@store': 'src/store',
        '@context': 'src/context',
    })(config);

    return config;
}