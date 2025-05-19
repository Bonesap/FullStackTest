import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { LoginFormData } from '../pages/LoginPage';

export interface Investment {
  id: string;
  project_name: string;
  token_class: string;
  shares_owned: number;
  market_value: number;
  roi_percent: number;
  next_distribution_date: string;
}

export interface InvestorSummary {
  investor_id: string;
  total_invested_amount: number;
  portfolio_value: number;
  distributions_received: number;
  outstanding_commitments: number;
}

export interface InvestorData {
  investor_summary: InvestorSummary;
  investments: Investment[];
}
export interface InputProps {
  register: UseFormRegister<LoginFormData>, 
  errors: FieldErrors<LoginFormData>, 
  placeholder: string, 
  type: string,
  name?: string
}