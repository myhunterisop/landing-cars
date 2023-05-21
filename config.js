const ViteImageOptimizerOptions = {
    test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
    exclude: undefined,
    include: undefined,
    includePublic: true,
    logStats: true,
    svg: {
        multipass: true,
        plugins: [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        cleanupNumericValues: false,
                        removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                    },
                    cleanupIDs: {
                        minify: false,
                        remove: false,
                    },
                    convertPathData: false,
                },
            },
            'sortAttrs',
            {
                name: 'addAttributesToSVGElement',
                params: {
                    attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                },
            },
        ],
    },
    png: {
        quality: 75,
    },
    jpeg: {
        quality: 75,
    },
    jpg: {
        quality: 75,
    },
    tiff: {
        quality: 85,
    },
    gif: {},
    webp: {
        lossless: true,
    },
    avif: {
        lossless: true,
    }
};

export { ViteImageOptimizerOptions }