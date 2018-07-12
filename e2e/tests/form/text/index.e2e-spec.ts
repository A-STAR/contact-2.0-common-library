import {
  expectToMatchScreenshot,
  navigate,
  type,
} from '../../../utils/index';

describe('/form/text', () => {
  beforeEach(async () => {
    await navigate('/form/text');
  });

  it('should render', async done => {
    await expectToMatchScreenshot();
    done();
  });

  it('should handle validation', async done => {
    await type('co-text:nth-of-type(3) input', 'Bar');
    await expectToMatchScreenshot();
    done();
  });
});
