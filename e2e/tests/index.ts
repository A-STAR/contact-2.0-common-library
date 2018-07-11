import {
  expectToMatchScreenshot,
  navigate,
  pause,
} from '../../utils/index';

describe('/', () => {
  beforeEach(async () => {
    await navigate('/');
  });

  it('should render', async done => {
    await expectToMatchScreenshot();
    done();
  });
});
