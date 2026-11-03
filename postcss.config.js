import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  plugins: [
    ...(isProduction
      ? [
          purgeCSSPlugin({
            content: ['./index.html', './src/**/*.js'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: ['active', 'scrolled', 'success'],
          }),
        ]
      : []),
  ],
};
