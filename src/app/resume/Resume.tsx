'use client'
import ResumeTable from "@/app/resume/ResumeTable";
import Hero from "@/components/Hero";
import React from "react";

export default function ResumePage() {
    return (
        <>
            <Hero title="👔 Resume"/>
            <ResumeTable/>
        </>
    );
}
