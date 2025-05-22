// Investor Summary entity interface matching Supabase schema
export class InvestorSummary {
  investor_id: string;  // uuid, primary key
  total_invested_amount: number;  // numeric
  portfolio_value: number;  // numeric
  distributions_received: number;  // numeric
  outstanding_commitments: number;  // numeric
}

// DTO for creating a new investor summary
export class CreateInvestorSummaryDto {
  investor_id: string;
  total_invested_amount: number;
  portfolio_value: number;
  distributions_received: number;
  outstanding_commitments: number;
}

// DTO for updating an investor summary
export class UpdateInvestorSummaryDto {
  total_invested_amount?: number;
  portfolio_value?: number;
  distributions_received?: number;
  outstanding_commitments?: number;
} 