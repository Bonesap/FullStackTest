import { Controller, Get, Post, Body, Param, Put, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { Investment } from './entities/investment.entity';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { UpdateInvestmentDto } from './dto/update-investment.dto';
import { SimulatePayoutDto } from './dto/simulate-payout.dto';

@Controller('investments')
export class InvestmentsController {
  constructor(private readonly investmentsService: InvestmentsService) {}

  @Get()
  findAll(
    @Query('sortBy') sortBy?: 'roi_percent' | 'next_distribution_date',
    @Query('order') order?: 'asc' | 'desc',
  ): Promise<Investment[]> {
    return this.investmentsService.findAll(sortBy, order);
  }

  @Get('investor/:id')
  findByInvestorId(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('sortBy') sortBy?: 'roi_percent' | 'next_distribution_date',
    @Query('order') order?: 'asc' | 'desc',
  ): Promise<Investment[]> {
    return this.investmentsService.findByInvestorId(id, sortBy, order);
  }

  @Post()
  create(@Body() createInvestmentDto: CreateInvestmentDto): Promise<Investment> {
    return this.investmentsService.create(createInvestmentDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateInvestmentDto: UpdateInvestmentDto,
  ): Promise<Investment> {
    return this.investmentsService.update(id, updateInvestmentDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.investmentsService.delete(id);
  }

  @Post('simulate-payout/:investorId')
  simulatePayout(
    @Param('investorId', ParseUUIDPipe) investorId: string,
    @Body() simulatePayoutDto: SimulatePayoutDto,
  ): Promise<void> {
    return this.investmentsService.simulatePayout(investorId, simulatePayoutDto.amount);
  }
} 