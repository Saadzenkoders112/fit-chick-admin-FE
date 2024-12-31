import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { UserDetailsTableHeaders } from '@/constants/table';

const UserDetailsTable = () => {
  const data = {
    id: 1,
    name: 'Sarah Thompson',
    email: 'saarah.t@example.com',
    ph_no: '123456789',
    age: '32',
    subscription_plan: 'Basic',
    end_date: '24 Oct, 2024',
  };
  return (
    <Table>
      <TableHeader className='font-playfair text-gray-500 text-sm'>
        <TableRow>
          {UserDetailsTableHeaders.map((header, index) => (
            <TableHead key={index}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>{data.name}</TableCell>
          <TableCell>{data.email}</TableCell>
          <TableCell>{data.ph_no}</TableCell>
          <TableCell>{data.age}</TableCell>
          <TableCell>{data.subscription_plan}</TableCell>
          <TableCell>{data.end_date}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default UserDetailsTable;
