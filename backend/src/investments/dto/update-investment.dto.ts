import { IsString, IsNumber, IsDate, IsOptional, Min, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateInvestmentDto {
  @IsString()
  @IsOptional()
  project_name?: string;

  @IsString()
  @IsOptional()
  token_class?: string;

  @IsNumber()
  @IsPositive()
  @Min(1)
  @IsOptional()
  shares_owned?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  market_value?: number;

  @IsNumber()
  @IsOptional()
  roi_percent?: number;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  next_distribution_date?: Date;
} 