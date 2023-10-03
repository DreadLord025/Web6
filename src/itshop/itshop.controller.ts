import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Response,
} from '@nestjs/common'
import { ITShopService } from './itshop.service'
import { CreateITShopDto } from './dto/create-itshop.dto'
import { UpdateITShopDto } from './dto/update-itshop.dto'
import { itExceptionFilter } from './filter/note-exception/it-exception.filter'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'

@Controller('itshop')
@UseFilters(new itExceptionFilter())
export class ITShopController {
  constructor(private readonly ITShopService: ITShopService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createITShopDto: CreateITShopDto, @Req() req) {
    return this.ITShopService.create(createITShopDto, +req.user.id)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.ITShopService.findAll(+req.user.id)
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.ITShopService.findOne(+id)
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateITShopDto: UpdateITShopDto,
    @Response() res,
  ) {
    return this.ITShopService.update(+id, updateITShopDto, res)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string, @Response() res) {
    return this.ITShopService.remove(+id, res)
  }
}
