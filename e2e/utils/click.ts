import { Page } from 'puppeteer';

export const click = async (selector: string) => {
  const page: Page = global['__PAGE__'];
  await page.click(selector);
};
