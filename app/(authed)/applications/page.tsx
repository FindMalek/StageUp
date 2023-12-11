"use client";

import React, { useState, useEffect } from "react";
import { DataTable } from "@/components/sections/application/enterprise/DataTable";
import { columns } from "@/components/sections/application/enterprise/Columns";
import { Internship } from "@prisma/client";

export default function Applications() {
  const [internshipsFetched, setInternshipsFetched] = useState<Internship[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/internship`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setInternshipsFetched(data.internships);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={internshipsFetched} />
    </div>
  );
}
