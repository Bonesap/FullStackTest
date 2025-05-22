import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InvestmentsModule } from './investments/investments.module';
import { InvestorSummaryModule } from './investor-summary/investor-summary.module';
import { SupabaseModule } from './supabase/supabase.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SupabaseModule,
    InvestmentsModule,
    InvestorSummaryModule,
  ],
})
export class AppModule {} 