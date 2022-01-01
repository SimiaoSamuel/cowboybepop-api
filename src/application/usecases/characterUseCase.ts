import { Character } from '../../domain/models/Character';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';

@Injectable()
export class CharacterUseCase {

  private readonly logger = new Logger(CharacterUseCase.name);

  async getAllCharacters(): Promise<Character> {
    return await new Character('Space Cowboy');
  }
}
