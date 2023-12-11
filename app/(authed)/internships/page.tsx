"use client";

import React, { useState, useEffect } from "react";

import Container from "@/components/ui/Container";
import Internship from "@/components/sections/internships/Internship";
import InternshipsFilter from "@/components/sections/internships/InternshipFilter";

export default function Internships() {
  const [internshipsFetched, setInternshipsFetched] = useState<any[]>([]);
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
    <>
      <InternshipsFilter>
        <Container>
          {internshipsFetched.map((internship) => (
            <Internship key={internship.id} internship={internship} />
          ))}
        </Container>
      </InternshipsFilter>
    </>
  );
}
