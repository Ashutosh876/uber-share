import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function MyRidesTable() {
  return (
    <div>
      <Table>
        <TableCaption>List of your upcoming rides</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Departure Time</TableHead>
            <TableHead>From</TableHead>
            <TableHead className="text-right">Companions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/*<TableRow>*/}
          {/*  <TableCell className="font-medium">INV001</TableCell>*/}
          {/*  <TableCell>Paid</TableCell>*/}
          {/*  <TableCell>Credit Card</TableCell>*/}
          {/*  <TableCell className="text-right">$250.00</TableCell>*/}
          {/*</TableRow>*/}
        </TableBody>
      </Table>
    </div>
  );
}
