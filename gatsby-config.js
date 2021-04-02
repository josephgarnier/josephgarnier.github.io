const path = require("path");
const config = require("./content/config.js");

module.exports = {
	siteMetadata: {
		title: config.siteTitle,
		siteUrl: config.siteUrl,
		description: config.siteDescription,
		author: `${config.authorFirstName} ${config.authorLastName}`,
		firstName: config.authorFirstName,
		lastName: config.authorLastName,
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-image",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "assets",
				path: `${__dirname}/assets`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "content",
				path: `${__dirname}/content`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "src",
				path: `${__dirname}/src`,
			},
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: config.manifestName,
				short_name: config.manifestShortName,
				start_url: config.manifestStartUrl,
				background_color: config.manifestBackgroundColor,
				theme_color: config.manifestThemeColor,
				display: config.manifestDisplay,
				icon: `${__dirname}/static/favicon.ico`,
			},
		},
		"gatsby-plugin-gatsby-cloud",
		{
			resolve: "gatsby-plugin-root-import",
			options: {
				assets: path.join(__dirname, "assets"),
				content: path.join(__dirname, "content"),
				src: path.join(__dirname, "src"),
			},
		},
	],
};
