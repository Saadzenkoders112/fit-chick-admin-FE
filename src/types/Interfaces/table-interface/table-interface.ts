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

interface FlaggedContentData {
  id: number;
  challenge_name?: string;
  created_by: string;
  reported_by: string;
  date_reported: string;
  status: string;
  reason: string;
}
export interface FlaggedTableProps {
  headers: string[];
  data: FlaggedContentData[];
}
