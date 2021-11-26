const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        '@primary-color-hover': '#fff',
                        '@primary-color': "#1DB954"

                    },
                    javascriptEnabled: true,
                },
            },
        },
    }, ],
};