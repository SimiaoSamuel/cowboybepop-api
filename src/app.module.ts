import { CharacterUseCase } from './application/usecases/characterUseCase';
import { CharacterController } from './presentation/controllers/character.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [CharacterController],
  providers: [CharacterUseCase],
})
export class AppModule {}
