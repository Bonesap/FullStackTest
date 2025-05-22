import { IsNumber, IsPositive } from 'class-validator';

export class SimulatePayoutDto {
  @IsNumber()
  @IsPositive()
  amount: number;
} 