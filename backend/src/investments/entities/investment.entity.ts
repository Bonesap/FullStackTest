// Investment entity interface matching Supabase schema
export class Investment {
  id: string;  // primary key
  investor_id: string;  // uuid
  project_name: string;  // text
  token_class: string;  // text
  shares_owned: number;  // integer
  market_value: number;  // numeric
  roi_percent: number;  // numeric
  next_distribution_date: Date;  // date
  created_at: Date;  // timestamp
}

// DTO for creating a new investment
export class CreateInvestmentDto {
  investor_id: string;
  project_name: string;
  token_class: string;
  shares_owned: number;
  market_value: number;
  roi_percent: number;
  next_distribution_date: Date;
}

// DTO for updating an investment
export class UpdateInvestmentDto {
  project_name?: string;
  token_class?: string;
  shares_owned?: number;
  market_value?: number;
  roi_percent?: number;
  next_distribution_date?: Date;
} 