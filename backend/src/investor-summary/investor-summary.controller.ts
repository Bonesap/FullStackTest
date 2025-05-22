import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { InvestorSummaryService } from './investor-summary.service';
import { InvestorSummary } from './entities/investor-summary.entity';
import { CreateInvestorSummaryDto } from './dto/create-investor-summary.dto';
import { UpdateInvestorSummaryDto } from './dto/update-investor-summary.dto';

@Controller('investor-summary')
export class InvestorSummaryController {
  constructor(
    private readonly investorSummaryService: InvestorSummaryService
  ) {}
  @Get()
  findAll() {
    return this.investorSummaryService.findAll();
  }
  @Get(':id')
  findByInvestorId(
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<InvestorSummary> {
    return this.investorSummaryService.findByInvestorId(id);
  }

  @Post()
  create(
    @Body() createInvestorSummaryDto: CreateInvestorSummaryDto
  ): Promise<InvestorSummary> {
    return this.investorSummaryService.create(createInvestorSummaryDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateInvestorSummaryDto: UpdateInvestorSummaryDto
  ): Promise<InvestorSummary> {
    return this.investorSummaryService.update(id, updateInvestorSummaryDto);
  }
}
