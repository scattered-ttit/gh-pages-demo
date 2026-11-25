const fs = require('fs');
const path = require('path');
// Поднимаемся на 2 уровня вверх от scripts -> server -> db
const data = require('../db/data.json'); 

const dir = path.join(__dirname, '../../../build/static/db');

// 1. Создаем папку, если её нет
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 2. Записываем файл data.json
fs.writeFileSync(
  path.join(dir, 'data.json'),
  JSON.stringify(data)
);

console.log('✅ Данные успешно скопированы в build/static/db/');