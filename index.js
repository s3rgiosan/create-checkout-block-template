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
			const slugConstantCase = view.slug.toUpperCase().replace(/\s+/g, '_').replace(/[^A-Z0-9_]/g, '');
			return {
				...view,
				slugConstantCase,
			};
		},
	},
};
