# Investor Dashboard Backend

A NestJS-based backend service for the Investor Dashboard application, providing robust APIs for managing investments and investor data.

## Features

- **Investment Management**
  - Create, read, update, and delete investments
  - Sort investments by ROI and distribution dates
  - Simulate investment payouts
  - Track investment performance

- **Investor Summary**
  - Track total invested amount
  - Monitor portfolio value
  - Record distributions received
  - Manage outstanding commitments

- **Data Validation**
  - Comprehensive input validation using class-validator
  - Type-safe DTOs for all operations
  - Automatic request transformation

- **Error Handling**
  - Global exception handling
  - Custom exception types
  - Consistent error response format
  - Detailed error messages

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account and project

## Installation

1. Clone the repository:
```bash
git clone <repository-url>

```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
SUPABASE_URL=https://cpkhaiwofoftugxbebum.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa2hhaXdvZm9mdHVneGJlYnVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3Mzg0MzEsImV4cCI6MjA2MzMxNDQzMX0.aREv2GOFo1z85NILIWhnIPsbhL-ddBRhblSl_AUb7r0
```

## Running the Application

### Development
```bash
npm run start:dev
```

### Production
```bash
npm run build
npm run start:prod
```

## API Endpoints

### Investments

- `GET /investments` - Get all investments
  - Query params: `sortBy` (roi_percent | next_distribution_date), `order` (asc | desc)

- `GET /investments/investor/:id` - Get investments by investor ID
  - Query params: `sortBy`, `order`

- `POST /investments` - Create new investment
  ```json
  {
    "investor_id": "uuid",
    "project_name": "string",
    "token_class": "string",
    "shares_owned": "number",
    "market_value": "number",
    "roi_percent": "number",
    "next_distribution_date": "date"
  }
  ```

- `PUT /investments/:id` - Update investment
  ```json
  {
    "project_name": "string",
    "token_class": "string",
    "shares_owned": "number",
    "market_value": "number",
    "roi_percent": "number",
    "next_distribution_date": "date"
  }
  ```

- `DELETE /investments/:id` - Delete investment

- `POST /investments/simulate-payout/:investorId` - Simulate investment payout
  ```json
  {
    "amount": "number"
  }
  ```

### Investor Summary

- `GET /investor-summary/:id` - Get investor summary

- `POST /investor-summary` - Create investor summary
  ```json
  {
    "investor_id": "uuid",
    "total_invested_amount": "number",
    "portfolio_value": "number",
    "distributions_received": "number",
    "outstanding_commitments": "number"
  }
  ```

- `PUT /investor-summary/:id` - Update investor summary
  ```json
  {
    "total_invested_amount": "number",
    "portfolio_value": "number",
    "distributions_received": "number",
    "outstanding_commitments": "number"
  }
  ```

## Error Handling

The API uses a consistent error response format:

```json
{
  "statusCode": "number",
  "message": "string",
  "error": "string",
  "timestamp": "string"
}
```

Common error types:
- `ResourceNotFoundException` (404)
- `InvalidOperationException` (400)
- `DatabaseException` (500)

## Development

### Project Structure
```
src/
├── common/
│   ├── dto/
│   └── exceptions/
├── investments/
│   ├── dto/
│   ├── entities/
│   ├── investments.controller.ts
│   ├── investments.module.ts
│   └── investments.service.ts
├── investor-summary/
│   ├── dto/
│   ├── entities/
│   ├── investor-summary.controller.ts
│   ├── investor-summary.module.ts
│   └── investor-summary.service.ts
├── supabase/
│   └── supabase.service.ts
├── app.module.ts
└── main.ts
```

