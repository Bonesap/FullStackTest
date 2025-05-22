import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import {
  InvestorSummary,
  CreateInvestorSummaryDto,
  UpdateInvestorSummaryDto,
} from './entities/investor-summary.entity';
import {
  ResourceNotFoundException,
  DatabaseException,
} from '../common/exceptions/custom.exceptions';

@Injectable()
export class InvestorSummaryService {
  constructor(private readonly supabaseService: SupabaseService) {}
  async findAll(): Promise<InvestorSummary[]> {
    try {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('investor_summary')
        .select('*');

      if (error) throw new DatabaseException(error.message);
      return data;
    } catch (error) {
      if (error instanceof DatabaseException) throw error;
      throw new DatabaseException('Failed to fetch investments');
    }
  }

  async findByInvestorId(investorId: string): Promise<InvestorSummary> {
    try {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('investor_summary')
        .select('*')
        .eq('investor_id', investorId)
        .single();

      if (error) throw new DatabaseException(error.message);
      if (!data)
        throw new ResourceNotFoundException('Investor Summary', investorId);
      return data;
    } catch (error) {
      if (
        error instanceof DatabaseException ||
        error instanceof ResourceNotFoundException
      )
        throw error;
      throw new DatabaseException('Failed to fetch investor summary');
    }
  }

  async update(
    investorId: string,
    summary: UpdateInvestorSummaryDto
  ): Promise<InvestorSummary> {
    try {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('investor_summary')
        .update(summary)
        .eq('investor_id', investorId)
        .select()
        .single();

      if (error) throw new DatabaseException(error.message);
      if (!data)
        throw new ResourceNotFoundException('Investor Summary', investorId);
      return data;
    } catch (error) {
      if (
        error instanceof DatabaseException ||
        error instanceof ResourceNotFoundException
      )
        throw error;
      throw new DatabaseException('Failed to update investor summary');
    }
  }

  async create(summary: CreateInvestorSummaryDto): Promise<InvestorSummary> {
    try {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('investor_summary')
        .insert(summary)
        .select()
        .single();

      if (error) throw new DatabaseException(error.message);
      return data;
    } catch (error) {
      if (error instanceof DatabaseException) throw error;
      throw new DatabaseException('Failed to create investor summary');
    }
  }
}
