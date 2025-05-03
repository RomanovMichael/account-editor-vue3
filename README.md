# Account Editor (Vue 3 + Pinia + PrimeVue)

Управление учётными записями с использованием Vue 3, Pinia, PrimeVue и Vitest.
<img width="1428" alt="Снимок экрана 2025-05-04 в 00 32 03" src="https://github.com/user-attachments/assets/9f7a107e-4d95-405d-a7d2-76fc7fb00cde" />

## 📦 Стек

- Vue 3 (Composition API, TypeScript)
- Pinia (стейт-менеджер)
- PrimeVue (UI-компоненты)
- Vitest (юнит-тесты)

## 🚀 Функциональность

✅ Добавление, удаление и редактирование учётных записей  
✅ Поддержка типов аккаунтов: LDAP и локальный  
✅ Валидация полей (login, password, labels) с отображением ошибок  
✅ Сохранение данных в LocalStorage  
✅ Трансформация поля `labels` из строки в массив объектов `{ text: string }`  
✅ Централизованное управление сохранением данных через store  
✅ Юнит-тесты для валидации

## 📁 Структура проекта

```
src/
  components/          → Vue-компоненты
  stores/             → Pinia store
  types/              → Общие типы (интерфейсы)
  utils/              → Утилиты (работа с LocalStorage, парсеры)
tests/                → Тесты Vitest
```

## 🏗️ Особенности

- Все бизнес-правила вынесены в утилиты, чтобы их легко было тестировать.
- Логика работы с LocalStorage инкапсулирована.
- Используем computed-геттеры, чтобы аккуратно связывать строковые и массивные поля (например, labels).

## 🛠️ Установка

```bash
npm install
```

## 💻 Локальная разработка

```bash
npm run dev
```

## 🧪 Запуск тестов

```bash
npm run test:unit
```
