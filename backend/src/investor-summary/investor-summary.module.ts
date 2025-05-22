import { Module } from '@nestjs/common';
import { InvestorSummaryController } from './investor-summary.controller';
import { InvestorSummaryService } from './investor-summary.service';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [InvestorSummaryController],
  providers: [InvestorSummaryService],
  exports: [InvestorSummaryService],
})
export class InvestorSummaryModule {} 