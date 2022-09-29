module.exports = {
    plugins: [
        require("autoprefixer"),
        require("postcss-nesting"),
        require("postcss-media-variables"),
        require("postcss-media-variables"),
        require("postcss-custom-media"),
    ],
    loader: "postcss-loader",
}