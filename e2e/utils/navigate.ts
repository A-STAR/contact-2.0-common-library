import { Page } from 'puppeteer';

import { click } from './click';
import { getUrl } from './url';
import { type } from './type';
import { pause } from './pause';

const gotoPage = async (path: string) => {
  const baseUrl: string = global['__URL__'];
  const page: Page = global['__PAGE__'];
  await page.goto(baseUrl + '/' + path);
};

export const navigate = async (path: string) => {
  const page: Page = global['__PAGE__'];
  await gotoPage(path);
  await pause();
};
