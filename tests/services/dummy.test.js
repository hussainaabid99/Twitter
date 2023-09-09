import { execute } from '../../src/service/dummy-service.js';
import { helper } from '../../src/service/helper-service.js';
jest.mock('../../src/service/helper-service.js');

test('result is true and return Learning JS', () => {
          //Impl of Test

          helper.mockReturnValue(true);
          const result = execute();
          expect(result).toBe('Learning JS');
});

test('result is false and returns Learning ReactJS', () => {
          //Impl of Test

          helper.mockReturnValue(false);
          const result = execute();
          expect(result).toBe('Learning ReactJS');
});