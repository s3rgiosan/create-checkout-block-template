module.exports = {
	templatesPath: __dirname,
	defaultValues: {
		npmDevDependencies: [
			'@woocommerce/dependency-extraction-webpack-plugin',
			'@woocommerce/eslint-plugin',
			'@wordpress/prettier-config',
			'@wordpress/scripts',
		],
		transformer: ( view ) => {
			const slugConstantCase = view.slug.replace(/[^a-zA-Z0-9\s-]+/g, '').toUpperCase().replace(/[\s-]+/g, '_');
			return {
				...view,
				slugConstantCase,
			};
		},
	},
};
