const plugins =
  process.env.NODE_ENV === 'production'
    ? ['postcss-nested', 'tailwindcss', 'autoprefixer', '@fullhuman/postcss-purgecss']
    : ['postcss-nested', 'tailwindcss'];

module.exports = {plugins};
