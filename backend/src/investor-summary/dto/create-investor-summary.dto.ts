import { IsUUID, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateInvestorSummaryDto {
  @IsUUID()
  @IsNotEmpty()
  investor_id: string;

  @IsNumber()
  @IsPositive()
  total_invested_amount: number;

  @IsNumber()
  @IsPositive()
  portfolio_value: number;

  @IsNumber()
  @IsPositive()
  distributions_received: number;

  @IsNumber()
  @IsPositive()
  outstanding_commitments: number;
} 