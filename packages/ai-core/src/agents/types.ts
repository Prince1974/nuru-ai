export interface AIAgent {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  model: string;
  capabilities: string[];
}
