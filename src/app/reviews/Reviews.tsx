'use client'
import ReviewsTable from "./ReviewsTable"
import Hero from "@/components/Hero";
import React from "react";

export default function ReviewsPage() {
    return (
        <>
            <Hero title="⭐️ Reviews"
                  subtitle="Here is where I'll rate anything that I feel deserves a documented rating out of 10 stars. These are just my opinion with no further context."/>
            <ReviewsTable/>
        </>
    );
}
