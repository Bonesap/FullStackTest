import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { Investment, CreateInvestmentDto, UpdateInvestmentDto } from './entities/investment.entity';
import { ResourceNotFoundException, DatabaseException, InvalidOperationException } from '../common/exceptions/custom.exceptions';

@Injectable()
export class InvestmentsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll(
    sortBy?: 'roi_percent' | 'next_distribution_date',
    order: 'asc' | 'desc' = 'desc',
  ): Promise<Investment[]> {
    try {
      let query = this.supabaseService.getClient()
        .from('investments')
        .select('*');

      if (sortBy) {
        query = query.order(sortBy, { ascending: order === 'asc' });
      }

      const { data, error } = await query;
      if (error) throw new DatabaseException(error.message);
      return data;
    } catch (error) {
      if (error instanceof DatabaseException) throw error;
      throw new DatabaseException('Failed to fetch investments');
    }
  }

  async findByInvestorId(
    investorId: string,
    sortBy?: 'roi_percent' | 'next_distribution_date',
    order: 'asc' | 'desc' = 'desc',
  ): Promise<Investment[]> {
    try {
      let query = this.supabaseService.getClient()
        .from('investments')
        .select('*')
        .eq('investor_id', investorId);

      if (sortBy) {
        query = query.order(sortBy, { ascending: order === 'asc' });
      }

      const { data, error } = await query;
      if (error) throw new DatabaseException(error.message);
      if (!data.length) throw new ResourceNotFoundException('Investments', investorId);
      return data;
    } catch (error) {
      if (error instanceof DatabaseException || error instanceof ResourceNotFoundException) throw error;
      throw new DatabaseException('Failed to fetch investor investments');
    }
  }

  async create(investment: CreateInvestmentDto): Promise<Investment> {
    try {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('investments')
        .insert(investment)
        .select()
        .single();
      
      if (error) throw new DatabaseException(error.message);
      return data;
    } catch (error) {
      if (error instanceof DatabaseException) throw error;
      throw new DatabaseException('Failed to create investment');
    }
  }

  async update(id: string, investment: UpdateInvestmentDto): Promise<Investment> {
    try {
      const { data, error } = await this.supabaseService
        .getClient()
        .from('investments')
        .update(investment)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw new DatabaseException(error.message);
      if (!data) throw new ResourceNotFoundException('Investment', id);
      return data;
    } catch (error) {
      if (error instanceof DatabaseException || error instanceof ResourceNotFoundException) throw error;
      throw new DatabaseException('Failed to update investment');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { error } = await this.supabaseService
        .getClient()
        .from('investments')
        .delete()
        .eq('id', id);
      
      if (error) throw new DatabaseException(error.message);
    } catch (error) {
      if (error instanceof DatabaseException) throw error;
      throw new DatabaseException('Failed to delete investment');
    }
  }

  async simulatePayout(investorId: string, amount: number): Promise<void> {
    try {
      if (amount <= 0) {
        throw new InvalidOperationException('Payout amount must be greater than 0');
      }

      const { data: summary, error: summaryError } = await this.supabaseService
        .getClient()
        .from('investor_summary')
        .select('*')
        .eq('investor_id', investorId)
        .single();

      if (summaryError) throw new DatabaseException(summaryError.message);
      if (!summary) throw new ResourceNotFoundException('Investor Summary', investorId);

      const { error: updateError } = await this.supabaseService
        .getClient()
        .from('investor_summary')
        .update({
          distributions_received: summary.distributions_received + amount,
        })
        .eq('investor_id', investorId);

      if (updateError) throw new DatabaseException(updateError.message);
    } catch (error) {
      if (error instanceof DatabaseException || 
          error instanceof ResourceNotFoundException || 
          error instanceof InvalidOperationException) throw error;
      throw new DatabaseException('Failed to simulate payout');
    }
  }
} 