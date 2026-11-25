const fs = require('fs');
const path = require('path');
const getDb = require('../db');

const db = getDb();
// Путь до папки сборки (на 3 уровня выше папки scripts)
const dir = path.join(__dirname, '../../../build/static/db');

// Создаем папку, если её нет
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Записываем файлы
for (let [key, value] of Object.entries(db)) {
  fs.writeFileSync(
    path.join(dir, `${key}.json`),
    JSON.stringify(value)
  );
}
console.log('✅ Данные успешно скопированы в build/static/db/');