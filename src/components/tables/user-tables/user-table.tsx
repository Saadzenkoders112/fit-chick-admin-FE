import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { UsertTableHeaders } from '@/constants/table';

import arrowRight from '../../../../public/assets/images/arrow-right.svg';
import Image from 'next/image';
import { Button } from '../../ui/button';
import { useRouter } from 'next/navigation';
import TableFoot from '../table-components/table-footer';
import { useState } from 'react';

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
  // States for table pagination inside footer
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const router = useRouter();
  return (
    <Table>
      <TableHeader className='bg-primary text-white font-playfair text-xs'>
        <TableRow>
          {UsertTableHeaders?.map((header, index) => (
            <TableHead key={index}>{header}</TableHead>
          ))}
          <TableHead></TableHead>
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
            <TableCell>{item.end_date}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.referrals}</TableCell>
            <TableCell>
              <Button
                className='bg-white hover:bg-white w-12'
                onClick={() => router.push('/users/user-details')}
              >
                <Image
                  src={arrowRight}
                  alt='arrow-right'
                  height={18}
                  width={18}
                />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={8}>
            <TableFoot
              rowsPerPage={limit}
              setRowsPerPage={setLimit}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              rowsOption={[5, 10, 20, 50]}
              total={20}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default UserTable;
