import { Test, TestingModule } from '@nestjs/testing';
import { MonoAppController } from './mono-app.controller';
import { MonoAppService } from './mono-app.service';

describe('MonoAppController', () => {
  let monoAppController: MonoAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MonoAppController],
      providers: [MonoAppService],
    }).compile();

    monoAppController = app.get<MonoAppController>(MonoAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(monoAppController.getHello()).toBe('Hello World!');
    });
  });
});
