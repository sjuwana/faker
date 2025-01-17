/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import en from '../locales/en';
import ur from '../locales/ur';

const faker = new Faker({
  locale: 'ur',
  localeFallback: 'en',
  locales: {
    ur,
    en,
  },
});

export = faker;
