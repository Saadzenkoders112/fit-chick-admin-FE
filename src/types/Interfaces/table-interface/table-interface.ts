interface InfluencersData {
  name: string;
  email: string;
  ph_no: string;
  age: number;
  status?: string | null;
}

export interface InfluencersTableProps {
  headers: string[];
  data: InfluencersData[];
}
