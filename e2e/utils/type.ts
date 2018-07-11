import { Page } from 'puppeteer';

export const type = async (selector: string, text: string) => {
  const page: Page = global['__PAGE__'];
  await page.type(selector, text);
};
