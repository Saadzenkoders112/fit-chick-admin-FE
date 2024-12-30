import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { UsertTableHeaders } from '@/constants/table';

const data = [
  {
    id: 1,
    name: 'Sarah Thompson',
    email: 'saarah.t@example.com',
    ph_no: '123456789',
    subscription_plan: 'Premium',
    end_date: '24 Oct, 2024',
    status: 'Active',
    referrals: 20,
  },
  {
    id: 1,
    name: 'Sarah Thompson',
    email: 'saarah.t@example.com',
    ph_no: '123456789',
    subscription_plan: 'Standard',
    end_date: '24 Oct, 2024',
    status: 'Active',
    referrals: 20,
  },
  {
    id: 1,
    name: 'Sarah Thompson',
    email: 'saarah.t@example.com',
    ph_no: '123456789',
    subscription_plan: 'Basic',
    end_date: '24 Oct, 2024',
    status: 'Active',
    referrals: 20,
  },
  {
    id: 1,
    name: 'Sarah Thompson',
    email: 'saarah.t@example.com',
    ph_no: '123456789',
    subscription_plan: 'Premium',
    end_date: '24 Oct, 2024',
    status: 'Active',
    referrals: 20,
  },
  {
    id: 1,
    name: 'Sarah Thompson',
    email: 'saarah.t@example.com',
    ph_no: '123456789',
    subscription_plan: 'Standard',
    end_date: '24 Oct, 2024',
    status: 'Active',
    referrals: 20,
  },
  {
    id: 1,
    name: 'Sarah Thompson',
    email: 'saarah.t@example.com',
    ph_no: '123456789',
    subscription_plan: 'Basic',
    end_date: '24 Oct, 2024',
    status: 'Active',
    referrals: 20,
  },
  {
    id: 1,
    name: 'Sarah Thompson',
    email: 'saarah.t@example.com',
    ph_no: '123456789',
    subscription_plan: 'Premium',
    end_date: '24 Oct, 2024',
    status: 'Active',
    referrals: 20,
  },
  {
    id: 1,
    name: 'Sarah Thompson',
    email: 'saarah.t@example.com',
    ph_no: '123456789',
    subscription_plan: 'Standard',
    end_date: '24 Oct, 2024',
    status: 'Active',
    referrals: 20,
  },
];

const UserTable = () => {
  return (
    <Table>
      <TableHeader className='bg-primary text-white font-playfair'>
        <TableRow>
          {UsertTableHeaders?.map((header, index) => (
            <TableHead key={index}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map(item => (
          <TableRow
            className='text-textPrimary p-2'
            key={item.id}
          >
            <TableCell className='font-medium'>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.ph_no}</TableCell>
            <TableCell className='p-2 py-4 flex justify-center'>
              <p
                className={`w-[120px] h-max rounded-lg p-2 text-center ${item.subscription_plan === 'Premium' ? 'bg-tablePink text-secondary' : item.subscription_plan === 'Standard' ? 'bg-tableBrown text-tableBrownText' : 'bg-tableGreen text-tableGreenText'}`}
              >
                {item.subscription_plan}
              </p>
            </TableCell>
            <TableCell className='text-right'>{item.end_date}</TableCell>
            <TableCell className='text-right'>{item.status}</TableCell>
            <TableCell className='text-right'>{item.referrals}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
