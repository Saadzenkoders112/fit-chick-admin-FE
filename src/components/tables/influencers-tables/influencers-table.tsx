import React, { useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TableFoot from '../table-components/table-footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import arrowRight from '../../../../public/assets/images/arrow-right.svg';
import { InfluencersTableProps } from '@/types/Interfaces/table-interface/table-interface';

const InfluencersTable: React.FC<InfluencersTableProps> = ({
  headers,
  data,
}) => {
  // States for table pagination inside footer
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const router = useRouter();
  const pathName = usePathname();
  const pathsArray = pathName.split('/');
  const currentPath = pathsArray[pathsArray.length - 1];

  return (
    <Table>
      <TableHeader className='bg-primary text-white font-playfair text-xs'>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead key={index}>{header}</TableHead>
          ))}
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow
            key={index}
            className='text-textPrimary p-2'
          >
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.ph_no}</TableCell>
            <TableCell>{item.age}</TableCell>
            {item.status && <TableCell>{item.status}</TableCell>}
            <TableCell
              colSpan={1}
              className='w-max'
            >
              <Button
                className='bg-white hover:bg-white'
                onClick={() =>
                  router.push(`/influencers/influencer-details/${currentPath}`)
                }
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
          <TableCell colSpan={6}>
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

export default InfluencersTable;
