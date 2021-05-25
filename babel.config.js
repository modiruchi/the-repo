module.exports = (api) => {
    const env = api.env();

    return {
        presets: [
            '@babel/react',
            [
                '@babel/preset-env',
                {
                    useBuiltIns: 'usage',
                    corejs: '3.8',
                    bugfixes: true,
                    modules: false
                },
            ]
        ],
        plugins: [
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-proposal-nullish-coalescing-operator'
        ],
    };
};
