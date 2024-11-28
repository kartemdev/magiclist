const prompts = require('prompts');
const { execSync } = require('child_process');

(async () => {
  const remoteVersion = execSync('git describe --tags --abbrev=0').toString().trim();
  const localVersion = JSON.parse(execSync('npm version --json').toString()).magiclist;

  const gitPullResponse = await prompts({
    type: 'toggle',
    name: 'value',
    message: `Сделал "git pull master" ?`,
    initial: false,
    active: 'Да',
    inactive: 'Нет',
  });

  let response = {};
  let resetResponse = { value: true };

  if (remoteVersion !== localVersion && gitPullResponse.value) {
    resetResponse = await prompts({
      type: 'toggle',
      name: 'value',
      message: `Текущая локальная версия (${localVersion}) отличаеться от версии в origin/master, cбросить до ${remoteVersion}?\n`,
      initial: false,
      active: 'Сбросить и выбрать новую версию',
      inactive: 'Пропустить выбор версии',
    });

    if (resetResponse.value) {
      execSync(`npm version ${remoteVersion} && git add package*.json`, { stdio: 'inherit' });
    }
  }

  if (resetResponse.value && gitPullResponse.value) {
    response = await prompts({
      type: 'select',
      name: 'version',
      message: 'Выберите тип версии для релиза:',
      choices: [
        { title: 'Major (X.0.0)', value: 'major' },
        { title: 'Minor (0.X.0)', value: 'minor' },
        { title: 'Patch (0.0.X)', value: 'patch' },
        { title: 'Пропустить версию', value: null },
      ],
    });
  }

  if (response.version) {
    console.log(`Выполняется релиз: ${response.version}`);
    execSync(`npm version ${response.version} && git add package*.json`, { stdio: 'inherit' });
  } else if (!gitPullResponse.value) {
    console.log('Релиз пропущен, сделай git pull.');
  } else if (!resetResponse.value) {
    console.log('Релиз пропущен, сбрось версию.');
  } else {
    console.log('Релиз пропущен.');
  }
})();
