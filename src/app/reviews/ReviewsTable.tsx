"use client"

import {useEffect, useState} from "react"
import Image from "next/image"
import ratingsData from "@/data/reviews.json"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {Card, CardContent} from "@/components/ui/card"

interface Rating {
    name: string
    rating: number
    tags: string[]
    credit?: string[]
}

export default function ReviewsTable() {
    const [ratings, setRatings] = useState<Rating[]>([])
    const [selectedTag, setSelectedTag] = useState<string>("All")

    // Load data from JSON on mount
    useEffect(() => {
        setRatings(ratingsData)
    }, [])

    const uniqueTags = [...new Set(ratings.flatMap((rating) => rating.tags))]

    const getRatingColor = (rating: number): string => {
        if (rating >= 0 && rating < 4) return "text-red-600"
        if (rating >= 4 && rating < 5) return "text-orange-500"
        if (rating >= 5 && rating < 6) return "text-gray-500"
        if (rating >= 6 && rating < 7) return "text-gray-600"
        if (rating >= 7 && rating < 8) return "text-lime-500"
        if (rating >= 8 && rating < 9) return "text-green-500"
        if (rating >= 9 && rating < 10) return "text-emerald-500"
        if (rating === 10) return "text-amber-400"
        return "text-gray-400"
    }

    const getTagLabel = (tag: string): string => {
        switch (tag) {
            case "Movie":
                return "Movies"
            case "Video Game":
                return "Video Games"
            case "Wrestling":
                return "Wrestling"
            default:
                return tag
        }
    }

    return (
        <section className="pb-20">
            <div className="container">
                <div className="mb-6">
                    <Select value={selectedTag} onValueChange={setSelectedTag}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Filter by category"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">All Ratings</SelectItem>
                            {uniqueTags.map((tag) => (
                                <SelectItem key={tag} value={tag}>
                                    {getTagLabel(tag)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Card>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[70%]">Name</TableHead>
                                    <TableHead className="text-right">Rating</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {ratings
                                    .filter((rating) => selectedTag === "All" || rating.tags.includes(selectedTag))
                                    .map((ratingData) => (
                                        <TableRow key={ratingData.name}>
                                            <TableCell className="font-medium">
                                                {ratingData.name}
                                                {ratingData.credit && (
                                                    <>
                                                        <br/>
                                                        <span
                                                            className="opacity-75 italic">by {ratingData.credit.join(", ")}</span>
                                                    </>
                                                )}
                                            </TableCell>
                                            <TableCell className="text-right font-mono font-semibold">
                                                <div className="flex items-center justify-end">
                                                    {ratingData.rating === 10 && (
                                                        <Image src="/static/star.gif" alt="Star" width={20}
                                                               height={20} className="mr-2"/>
                                                    )}
                                                    <span
                                                        className={getRatingColor(ratingData.rating)}>{ratingData.rating}</span>
                                                    /10
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

