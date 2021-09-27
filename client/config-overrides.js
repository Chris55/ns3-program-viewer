module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.js$/,
        use: { loader: require.resolve('@open-wc/webpack-import-meta-loader') }
    });
    return config;
}
