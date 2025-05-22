import { IsString, IsNumber, IsDate, IsNotEmpty, IsUUID, Min, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateInvestmentDto {
  @IsUUID()
  @IsNotEmpty()
  investor_id: string;

  @IsString()
  @IsNotEmpty()
  project_name: string;

  @IsString()
  @IsNotEmpty()
  token_class: string;

  @IsNumber()
  @IsPositive()
  @Min(1)
  shares_owned: number;

  @IsNumber()
  @IsPositive()
  market_value: number;

  @IsNumber()
  roi_percent: number;

  @IsDate()
  @Type(() => Date)
  next_distribution_date: Date;
} 