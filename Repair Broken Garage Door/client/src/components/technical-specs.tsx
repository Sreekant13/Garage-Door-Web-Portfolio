// src/components/TechnicalSpecs.tsx
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { searsModels, stanleyModels } from "@/lib/data";

const PAGE_SIZE = 25;

function PaginatedSears() {
  const [page, setPage] = useState(0);
  const total = searsModels.length;
  const maxPage = Math.floor((total - 1) / PAGE_SIZE);
  const slice = searsModels.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <Card className="bg-white shadow-lg border-l-4 border-indigo-500">
      <CardHeader className="bg-indigo-50">
        <CardTitle className="text-indigo-700">Sears Garage Door Opener Models</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-indigo-100">
              <TableRow>
                <TableHead>Model Number</TableHead>
                <TableHead>Transmitter</TableHead>
                <TableHead>Logic Board</TableHead>
                <TableHead>Current Logic Board</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {slice.map((m, i) => (
                <TableRow
                  key={i}
                  className="odd:bg-white even:bg-indigo-50 hover:bg-indigo-200 transition-colors"
                >
                  <TableCell className="font-mono text-indigo-800">{m.modelNumber}</TableCell>
                  <TableCell className="font-mono text-indigo-800">{m.transmitter}</TableCell>
                  <TableCell className="font-mono text-indigo-800">{m.logicBoard}</TableCell>
                  <TableCell className="font-mono text-indigo-800">{m.currentLogicBoard}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button
            size="sm"
            variant="outline"
            className="bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            Prev
          </Button>
          <span className="text-sm text-indigo-700">
            Page {page + 1} of {maxPage + 1}
          </span>
          <Button
            size="sm"
            variant="outline"
            className="bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50"
            disabled={page === maxPage}
            onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function PaginatedStanley() {
  const [page, setPage] = useState(0);
  const total = stanleyModels.length;
  const maxPage = Math.floor((total - 1) / PAGE_SIZE);
  const slice = stanleyModels.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <Card className="bg-white shadow-lg border-l-4 border-green-500">
      <CardHeader className="bg-green-50">
        <CardTitle className="text-green-700">Stanley Garage Door Opener Models</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-green-100">
              <TableRow>
                <TableHead>Model Number</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Circuit Board</TableHead>
                <TableHead>Transmitter</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {slice.map((m, i) => (
                <TableRow
                  key={i}
                  className="odd:bg-white even:bg-green-50 hover:bg-green-200 transition-colors"
                >
                  <TableCell className="font-mono text-green-800">{m.modelNumber}</TableCell>
                  <TableCell className="text-green-800">{m.year}</TableCell>
                  <TableCell className="font-mono text-green-800">{m.circuitBoard}</TableCell>
                  <TableCell className="font-mono text-green-800">{m.transmitter}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button
            size="sm"
            variant="outline"
            className="bg-green-500 text-white hover:bg-green-600 disabled:opacity-50"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            Prev
          </Button>
          <span className="text-sm text-green-700">
            Page {page + 1} of {maxPage + 1}
          </span>
          <Button
            size="sm"
            variant="outline"
            className="bg-green-500 text-white hover:bg-green-600 disabled:opacity-50"
            disabled={page === maxPage}
            onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TechnicalSpecs() {
  return (
    <section id="tspecs" className="py-16 bg-gradient-to-b from-yellow-300 to-red-300">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-inter font-bold text-gray-800">
            Technical Specifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We service all major brands and models with complete technical specifications.
          </p>
        </div>

        <Tabs defaultValue="sears" className="w-full">
          <TabsList className="grid grid-cols-2 gap-2 bg-white/50 p-1 rounded-lg backdrop-blur">
            <TabsTrigger
              value="sears"
              className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-indigo-700 py-2 rounded-lg transition-colors"
            >
              Sears Models
            </TabsTrigger>
            <TabsTrigger
              value="stanley"
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-green-700 py-2 rounded-lg transition-colors"
            >
              Stanley Models
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sears">
            <PaginatedSears />
          </TabsContent>

          <TabsContent value="stanley">
            <PaginatedStanley />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
