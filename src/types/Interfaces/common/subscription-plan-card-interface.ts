interface SubscriptionCardInterface {
  amount: number;
  duration: string;
  type: string;
  description: string;
  features: string[];
}

export interface SubscriptionCardProps {
  plan: SubscriptionCardInterface;
}
