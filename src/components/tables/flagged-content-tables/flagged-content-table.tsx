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

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import TableFoot from '../table-components/table-footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import arrowRight from '../../../../public/assets/images/arrow-right.svg';
import { FlaggedTableProps } from '@/types/Interfaces/table-interface/table-interface';

const FlaggedContentTable: React.FC<FlaggedTableProps> = ({
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
            <TableCell>{item.id}</TableCell>
            {item.challenge_name && (
              <TableCell>{item.challenge_name}</TableCell>
            )}
            <TableCell>{item.created_by}</TableCell>
            <TableCell>{item.reported_by}</TableCell>
            <TableCell>{item.date_reported}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell className='relative w-[200px] h-[10px] truncate overflow-hidden text-ellipsis border'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    asChild
                    className='line-clamp-1'
                  >
                    <div className='w-40 h-6 cursor-pointer'>{item.reason}</div>
                  </TooltipTrigger>
                  <TooltipContent className='bg-white w-80 h-32 overflow-y-auto p-2'>
                    <div>{item.reason}</div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
            <TableCell
              colSpan={1}
              className='w-max'
            >
              <Button
                className='bg-white hover:bg-white w-12'
                onClick={() =>
                  router.push(
                    `/flagged-contents/flagged-content-details/${currentPath}`,
                  )
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

export default FlaggedContentTable;
