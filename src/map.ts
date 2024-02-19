// import * as jsonData from '../package.json';

// console.log(jsonData);
import * as changeCase from 'change-case';

export const COMMAND_DEFINITIONS = [
	{
		label: 'commands',
		description: 'Shortcut switch'
	},
	{
		label: 'noCase',
		description: 'Convert a string to space separated lower case (`foo bar`).',
		func: changeCase.noCase
	},
	{
		label: 'camelCase',
		description: 'Convert a string to camel case (`fooBar`).',
		func: changeCase.camelCase
	},
	{
		label: 'pascalCase',
		description: 'Convert a string to pascal case (`FooBar`).',
		func: changeCase.pascalCase
	},
	{
		label: 'pascalSnakeCase',
		description: 'Convert a string to pascal snake case (`Foo_Bar`).',
		func: changeCase.pascalSnakeCase
	},
	{
		label: 'capitalCase',
		description: 'Convert a string to capital case (`Foo Bar`).',
		func: changeCase.capitalCase
	},
	{
		label: 'constantCase',
		description: 'Convert a string to constant case (`FOO_BAR`).',
		func: changeCase.constantCase
	},
	{
		label: 'dotCase',
		description: 'Convert a string to dot case (`foo.bar`).',
		func: changeCase.dotCase
	},
	{
		label: 'kebabCase',
		description: 'Convert a string to kebab case (`foo-bar`).',
		func: changeCase.kebabCase
	},
	{
		label: 'pathCase',
		description: 'Convert a string to path case (`foo/bar`).',
		func: changeCase.pathCase
	},
	{
		label: 'sentenceCase',
		description: 'Convert a string to path case (`Foo bar`).',
		func: changeCase.sentenceCase
	},
	{
		label: 'snakeCase',
		description: 'Convert a string to snake case (`foo_bar`).',
		func: changeCase.snakeCase
	},
	{
		label: 'trainCase',
		description: 'Convert a string to header case (`Foo-Bar`).',
		func: changeCase.trainCase
	}
];
