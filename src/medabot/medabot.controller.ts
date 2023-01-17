import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseUUIDPipe } from '@nestjs/common';
import { MedabotService } from './medabot.service';
import { CreateMedabotDto } from './dto/create-medabot.dto';
import { UpdateMedabotDto } from './dto/update-medabot.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

@Controller('medabot')
export class MedabotController {
  constructor(private readonly medabotService: MedabotService) {}

  @Post()
  @HttpCode( HttpStatus.CREATED )
  create(@Body() createMedabotDto: CreateMedabotDto) {
    return this.medabotService.create(createMedabotDto);
  }

  @Get()
  findAll() {
    return this.medabotService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.medabotService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateMedabotDto: UpdateMedabotDto) {
    return this.medabotService.update(term, updateMedabotDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe ) id: string) {
    return this.medabotService.remove(id);
  }
}
