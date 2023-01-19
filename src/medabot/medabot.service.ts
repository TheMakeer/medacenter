import { BadRequestException, Injectable, Body, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateMedabotDto } from './dto/create-medabot.dto';
import { UpdateMedabotDto } from './dto/update-medabot.dto';
import { Medabot } from './entities/medabot.entity';
import { PaginationDto } from '../common/dto/pagination.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MedabotService {

  constructor(
    @InjectModel(Medabot.name)
    private readonly medabotModel: Model<Medabot>,
    private readonly configService: ConfigService,
    ) {}

  async create(createMedabotDto: CreateMedabotDto) {
    console.log(createMedabotDto);
    createMedabotDto.name = createMedabotDto.name.toLocaleLowerCase();

    try {
      const medabot = await this.medabotModel.create(createMedabotDto);
      return medabot;

    } catch (error) {

      this.handleExceptions(error);

    }

  }

  async findAll(paginationDto: PaginationDto) {
    const { limit , offset = 0 } =paginationDto;
    return this.medabotModel.find()
      .limit(limit)
      .skip(offset)
      .sort({ 

        no:1
        
      })
      .select('-__v');
  }

  async findOne(term: string) {

    let medabot: Medabot;

    if (!isNaN(+term)) {
      medabot = await this.medabotModel.findOne({ no: term });
    }

    if (!medabot && isValidObjectId(term)) {
      medabot = await this.medabotModel.findById(term)
    }

    if (!medabot) {
      medabot = await this.medabotModel.findOne({ name: term.toLocaleLowerCase().trim() })
    }

    if (!medabot) throw new NotFoundException(`Medabot ${term} not found`);

    return medabot;

  }

  async update(term: string, updateMedabotDto: UpdateMedabotDto) {
    let medabot = await this.findOne(term);

    if (updateMedabotDto.name)
      updateMedabotDto.name = updateMedabotDto.name.toLowerCase();

    try {

      await medabot.updateOne(updateMedabotDto)

      return { ...medabot.toJSON(), ...updateMedabotDto };

    } catch (error) {
      this.handleExceptions(error);
    }

  }

  async remove(id: string) {

    // const medabot = await this.findOne(id);

    // await medabot.deleteOne();

    // const result = await this.medabotModel.findByIdAndDelete( id );

    const { deletedCount, acknowledged } = await this.medabotModel.deleteOne({ _id: id });
    if (deletedCount === 0) throw new BadRequestException(`Medabot with id ${id} not found.`)

    return;

  }

  private handleExceptions(error: any) {

    if (error.code === 11000) {
      throw new BadRequestException(`Another Medabot already has ${JSON.stringify(error.keyValue)} as value `);
    }

    throw new InternalServerErrorException(`Couldn't update Medabot - Check server logs`);

  }



}
