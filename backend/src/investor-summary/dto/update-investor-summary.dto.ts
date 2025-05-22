import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class UpdateInvestorSummaryDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  total_invested_amount?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  portfolio_value?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  distributions_received?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  outstanding_commitments?: number;
} 