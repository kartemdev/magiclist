'use strict';

const custom = require('@digitalroute/cz-conventional-changelog-for-jira/configurable');

module.exports = custom({
  types: {
    feat: {
      description: 'Добавление нового функционала',
    },
    fix: {
      description: 'Исправление ошибки',
    },
    ci: {
      description: 'Изменения в файлах и скриптах настройки CI',
    },
    refactor: {
      description: 'Изменения, которые не исправляют ошибки или добавляют новый функционал',
    },
  },
});
