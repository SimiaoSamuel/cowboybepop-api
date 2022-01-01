import { CharacterUseCase } from '../../application/usecases/characterUseCase';
import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { Character } from 'src/domain/models/Character';

@Controller()
export class CharacterController {
  constructor(private readonly CharacterUseCase : CharacterUseCase) {}

  @Get('characters')
  async getAllCharPaginateWithFilter() : Promise<Character> {
    const characters = this.CharacterUseCase.getAllCharacters();

    return characters;
  }
}
