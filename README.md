# better-change-case README

## Extension Settings

| Command         | Description                                                |
| --------------- | ---------------------------------------------------------- |
| commands        | Shortcut switch (shortcut key `alt+q`)                     |
| noCase          | Convert a string to space separated lower case (`foo bar`) |
| camelCase       | Convert a string to camel case (`fooBar`)                  |
| pascalCase      | Convert a string to pascal case (`FooBar`)                 |
| pascalSnakeCase | Convert a string to pascal snake case (`Foo_Bar`)          |
| capitalCase     | Convert a string to capital case (`Foo Bar`)               |
| constantCase    | Convert a string to constant case (`FOO_BAR`)              |
| dotCase         | Convert a string to dot case (`foo.bar`)                   |
| kebabCase       | Convert a string to kebab case (`foo-bar`)                 |
| pathCase        | Convert a string to path case (`foo/bar`)                  |
| sentenceCase    | Convert a string to path case (`Foo bar`)                  |
| snakeCase       | Convert a string to snake case (`foo_bar`)                 |
| trainCase       | Convert a string to header case (`Foo-Bar`)                |

![image](https://raw.githubusercontent.com/lolisTop/better-change-case/main/images/animation.gif)

> You can change the order of the toggle, or remove it, according to your preference.

``` json
{
	"better-change-case.shortcutKeysToggleOptions": [
		"camelCase",
		"pascalCase",
		"snakeCase",
		"kebabCase",
		"constantCase",
		"noCase",
		"capitalCase",
		"dotCase",
		"pathCase",
		"sentenceCase",
		"snakeCase",
		"trainCase"
	]
}

```

### 2.0.0

- Add configuration Settings
- Fixed the failure to initialize the shortcut key

### 1.0.0

Init.

**Enjoy!**
