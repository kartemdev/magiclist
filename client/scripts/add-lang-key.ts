const fs = require("fs"),
path = require("path");

const isEntryPoint = () => require.main === module;

if (isEntryPoint()) {
  const argLength = process.argv.length;

  if (argLength < 8) {
    console.log(
      'There are missing arguments (npm run add-lang-key (key) (rus translate) (eng translate) (json files paths))'
    );
    process.exit(1);
  }
}

const writeLangKeys = (args) => {
  const [,, langKey, ruTranslate, enTranslate, ...filesPaths] = args;
  const ruKeysPath = filesPaths.find((path) => path.slice(-7) === 'ru.json');
  const enKeysPath = filesPaths.find((path) => path.slice(-7) === 'en.json');

  if (!ruKeysPath || !enKeysPath) {
    console.log('not found eng & rus json files');
    process.exit(1);
  }

  const ruKeysFile = fs.readFileSync(ruKeysPath);
  const ruKeys = JSON.parse(ruKeysFile);

  const enKeysFile = fs.readFileSync(enKeysPath);
  const enKeys = JSON.parse(enKeysFile);

  fs.writeFileSync(ruKeysPath, JSON.stringify({ ...ruKeys, [langKey]: ruTranslate }, null, '\t'));
  fs.writeFileSync(enKeysPath, JSON.stringify({ ...enKeys, [langKey]: enTranslate }, null, '\t'));
  process.exit(1)
};

module.exports = writeLangKeys(process.argv)
