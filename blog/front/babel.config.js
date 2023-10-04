module.exports = {
	presets: [
	  '@babel/preset-env', // Pour la compatibilité ES6+
	  '@babel/preset-react' // Pour la compatibilité React
	],
	plugins: [
	  ["@babel/plugin-transform-private-methods", { "loose": true }],
	  ["@babel/plugin-transform-nullish-coalescing-operator", { "loose": true }],
	  // Ajoutez d'autres plugins de transformation ici...
	]
  };