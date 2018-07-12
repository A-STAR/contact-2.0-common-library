import { Page } from 'puppeteer';

import { pause } from './pause';

export const navigate = async (path: string) => {
  const baseUrl: string = global['__URL__'];
  const page: Page = global['__PAGE__'];
  await page.goto(baseUrl + '/' + path);
  await pause();
};
