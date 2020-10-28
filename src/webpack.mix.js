const mix         = require('laravel-mix')
const tailwindcss = require('tailwindcss')

require('laravel-mix-purgecss')

mix.js('resources/js/modules/pages/register.js', 'public/js/pages')
	.js('resources/js/app.js', 'public/js')
	.extract()

mix.sass('resources/sass/app.scss', 'public/css')
	.options({
		processCssUrls: false,
		postCss: [tailwindcss('tailwind.config.js')],
	})

mix.webpackConfig(require('./webpack.config'))

if(mix.inProduction()) {
	mix.purgeCss().sourceMaps()
}

mix.version()
