import { JasmineIntroService } from './jasmine-intro.service';

describe('JasmineIntroService', () => {
  let service: JasmineIntroService;
  beforeAll(() => {
    console.log('beforeAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
    service = new JasmineIntroService();
  });

  it('should add two numbers', () => {
        const result = service.addNumber(1, 2);

    expect(result).toEqual(3);
  });

  it('should subtract two numbers', () => {
    const result = service.subtractNumber(1, 2);

    expect(result).toEqual(-1);
  });

  it('should multiplication two number', () => {
    const result = service.multiplicationNumber(4, 2);

    expect(result).toEqual(8);
  });

  it('should division two number', () => {
    const result = service.divisionNumber(4, 2);

    expect(result).toEqual(2);
  });

  afterEach(() => {
    console.log('afterEach');
  });

  afterAll(() => {
    console.log('afterAll');
  });
});
