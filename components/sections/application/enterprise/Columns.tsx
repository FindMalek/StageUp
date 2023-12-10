'use client';

import Link from 'next/link';

import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { ColumnDef } from '@tanstack/react-table';
import { Internship } from '@prisma/client';

import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';

export const columns: ColumnDef<Internship>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'id',
    header: () => <div className="text-left">ID Stage</div>,
    cell: ({ row }) => {
      return (
        <div className="text-left">
          {row.original.id.toString().slice(-7).toUpperCase()}
        </div>
      );
    }
  },
  {
    accessorKey: 'positionTitle',
    header: 'Position'
  },
  {
    accessorKey: 'documentationFileUrl',
    header: 'Documentation',
    cell: ({ row }) => {
      return (
        <Link
          target="_blank"
          href={row.original.documentationFileUrl}
          className="hover:underline"
        >
          Fichier de documentation
        </Link>
      );
    }
  },
  {
    accessorKey: 'duration',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Durée du stage
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const months = parseInt(row.original.duration.split(' ')[0]);
      const weeks = months * 4;
      return <div className="text-left">{weeks} semaines</div>;
    }
  },

  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date de création
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt);
      return <div className="text-left">{date.toLocaleDateString()}</div>;
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const internship = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(internship.id)}
            >
              Copier l'ID du stage
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Voir les détails du stage</DropdownMenuItem>
            <DropdownMenuItem>Modifier le stage</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Supprimer le stage</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
