import { Page } from 'puppeteer';

export const expectToMatchScreenshot = async () => {
  const page: Page = global['__PAGE__'];
  const screenshot = await page.screenshot();
  (expect(screenshot)['toMatchImageSnapshot'] as any)({
    customDiffConfig: {
      threshold: 0.01,
    },
    failureThreshold: 0,
    failureThresholdType: 'percent',
  });
};
