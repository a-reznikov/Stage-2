import createTemplate from './template';

const bodyEx: HTMLBodyElement = document.createElement('body');
if (bodyEx) bodyEx.className = 'body';
bodyEx.innerHTML = `<body class="body"><header class="header"></header><main class="main"><section class="playground"><section class="display"></section><section class="playground__interection interection"><section class="interection__editor editor"></section><section class="interection__viewer viewer"></section></section></section><aside class="level"></aside></main><footer class="footer"></footer></body>`;
test('Template has been created', () => {
  expect(createTemplate()).toStrictEqual(bodyEx);
});
