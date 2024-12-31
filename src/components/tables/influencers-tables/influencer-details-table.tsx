import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { InfluencerDetailsTableHeaders } from '@/constants/table';

const InfluencerDetailsTable = () => {
  const data = {
    name: 'Sarah Thompson',
    email: 'saarah.t@example.com',
    ph_no: '123456789',
    age: '32',
    influencer_goal: 'Build a Community, Share Recipes and Tips',
  };
  return (
    <Table>
      <TableHeader className='font-playfair text-gray-500 text-sm'>
        <TableRow>
          {InfluencerDetailsTableHeaders.map((header, index) => (
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
          <TableCell>{data.influencer_goal}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default InfluencerDetailsTable;
