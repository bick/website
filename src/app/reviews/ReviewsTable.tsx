"use client"
import {useCallback, useEffect, useMemo, useState} from "react"
import Image from "next/image"
import {Card, CardContent} from "@/components/ui/card"
import ratingsData from "@/data/reviews.json"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"

// Type definitions
interface Rating {
    name: string
    rating: number | string // Some ratings might be empty strings
    tags: string
    credit: string
}

// Rating color constants
const RATING_COLORS = {
    "0-3.99": "text-red-600",
    "4-4.99": "text-orange-500",
    "5-5.99": "text-gray-500",
    "6-6.99": "text-gray-600",
    "7-7.99": "text-lime-500",
    "8-8.99": "text-green-500",
    "9-9.99": "text-emerald-500",
    "10": "text-amber-400",
    default: "text-gray-400",
}

// Tag label mapping
const TAG_LABELS = {
    Movie: "Movies",
    "Video Game": "Video Games",
    Wrestling: "Wrestling",
    Music: "Music",
    Tech: "Technology",
}

export default function ReviewsTable() {
    // State setup
    const [ratings, setRatings] = useState<Rating[]>([])
    const [selectedTag, setSelectedTag] = useState<string>("All")

    // Load data from imported JSON
    useEffect(() => {
        setRatings(ratingsData)
    }, [])

    // Memoize unique tags
    const uniqueTags = useMemo(() => {
        if (!ratings.length) return []
        return [...new Set(ratings.map(rating => rating.tags))].sort()
    }, [ratings])

    // Get rating color based on score
    const getRatingColor = useCallback((rating: number | string): string => {
        // Handle non-numeric or empty ratings
        if (rating === "" || typeof rating !== 'number') return RATING_COLORS.default

        if (rating >= 0 && rating < 4) return RATING_COLORS["0-3.99"]
        if (rating >= 4 && rating < 5) return RATING_COLORS["4-4.99"]
        if (rating >= 5 && rating < 6) return RATING_COLORS["5-5.99"]
        if (rating >= 6 && rating < 7) return RATING_COLORS["6-6.99"]
        if (rating >= 7 && rating < 8) return RATING_COLORS["7-7.99"]
        if (rating >= 8 && rating < 9) return RATING_COLORS["8-8.99"]
        if (rating >= 9 && rating < 10) return RATING_COLORS["9-9.99"]
        if (rating === 10) return RATING_COLORS["10"]
        return RATING_COLORS.default
    }, [])

    // Get human-readable tag label
    const getTagLabel = useCallback((tag: string): string =>
            TAG_LABELS[tag as keyof typeof TAG_LABELS] || tag,
        [])

    // Group ratings by tag
    const groupedRatings = useMemo(() => {
        if (!ratings.length) return {}

        if (selectedTag !== "All") {
            return {[selectedTag]: ratings.filter((rating) => rating.tags === selectedTag)}
        }

        return uniqueTags.reduce<Record<string, Rating[]>>((acc, tag) => {
            acc[tag] = ratings.filter((rating) => rating.tags === tag)
            return acc
        }, {})
    }, [ratings, selectedTag, uniqueTags])

    // Group ratings by credit
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const groupRatingsByCredit = useCallback((ratingsList: Rating[], tag: string) => {
        const creditGroups: Record<string, Rating[]> = {}
        const uncreditedItems: Rating[] = []

        ratingsList.forEach((rating) => {
            if (!rating.credit || rating.credit === "") {
                uncreditedItems.push(rating)
            } else {
                const creditKey = rating.credit
                if (!creditGroups[creditKey]) {
                    creditGroups[creditKey] = []
                }
                creditGroups[creditKey].push(rating)
            }
        })

        return {creditGroups, uncreditedItems}
    }, [])

    // Star component for 10/10 ratings
    const RatingStar = () => (
        <Image src="/static/star.gif" alt="Star" width={20} height={20} className="mr-2"/>
    )

    // Rating display component
    const RatingDisplay = ({value}: { value: number | string }) => {
        // Handle empty or non-numeric ratings
        if (value === "" || isNaN(Number(value))) {
            return <div className="flex items-center justify-end font-mono font-semibold text-gray-400">N/A</div>
        }

        const numericValue = typeof value === 'string' ? parseFloat(value) : value

        return (
            <div className="flex items-center justify-end font-mono font-semibold">
                {numericValue === 10 && <RatingStar/>}
                <span className={getRatingColor(numericValue)}>{numericValue}</span>/10
            </div>
        )
    }

    // Single rating item component
    const RatingItem = ({rating}: { rating: Rating }) => (
        <div className="flex items-center justify-between py-3 border-t">
            <div className="font-medium">{rating.name}</div>
            <RatingDisplay value={rating.rating}/>
        </div>
    )

    // Credit group component
    const CreditGroup = ({credit, ratings, tag}: { credit: string; ratings: Rating[]; tag: string }) => {
        // Show credit for all tags except Wrestling
        const showCredit = tag !== "Wrestling"

        // Count perfect 10 ratings
        const perfectScores = ratings.filter(item => item.rating === 10).length

        if (ratings.length <= 1) {
            const rating = ratings[0]
            return (
                <div className="px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="font-medium">
                            {rating.name}
                            {showCredit && credit && (
                                <>
                                    <br/>
                                    <span className="italic opacity-75">by {credit}</span>
                                </>
                            )}
                        </div>
                        <RatingDisplay value={rating.rating}/>
                    </div>
                </div>
            )
        }

        return (
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="credit-items">
                    <AccordionTrigger className="px-4 py-6">
                        {showCredit ? (
                            <div className="flex w-full">
                                {credit}
                                <span className="flex justify-end ml-auto mr-12 text-muted-foreground">
        {perfectScores > 0 && (
            <>
                <RatingStar/> x{perfectScores} <span className="mx-2">•</span>
            </>
        )}
                                    <span className="italic">
          {ratings.length} {tag === "Movie" ? "total movies" : tag === "Music" ? "total albums" : tag.toLowerCase()}
        </span>
      </span>
                            </div>
                        ) : (
                            <span>{credit}</span>
                        )}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="px-4 pb-3">
                            {ratings.map((rating) => (
                                <RatingItem key={rating.name} rating={rating}/>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    }

    // Category section component
    const CategorySection = ({tag, ratings}: { tag: string; ratings: Rating[] }) => {
        const {creditGroups, uncreditedItems} = groupRatingsByCredit(ratings, tag)

        if (ratings.length === 0) return null

        return (
            <>
                <TableRow>
                    <TableCell colSpan={2} className="bg-muted/50 py-2">
                        <div className="font-semibold">{getTagLabel(tag)}</div>
                    </TableCell>
                </TableRow>
                {/* Credit groups */}
                {Object.entries(creditGroups).map(([credit, creditRatings]) => (
                    <TableRow key={`${tag}-${credit}`} className="hover:bg-muted/20">
                        <TableCell colSpan={2} className="p-0">
                            <CreditGroup credit={credit} ratings={creditRatings} tag={tag}/>
                        </TableCell>
                    </TableRow>
                ))}
                {/* Uncredited items */}
                {uncreditedItems.map((rating) => (
                    <TableRow key={`${tag}-${rating.name}`}>
                        <TableCell className="font-medium">{rating.name}</TableCell>
                        <TableCell className="text-right">
                            <RatingDisplay value={rating.rating}/>
                        </TableCell>
                    </TableRow>
                ))}
            </>
        )
    }

    // Filtered view component
    const FilteredView = ({ratings}: { ratings: Rating[] }) => {
        const {creditGroups, uncreditedItems} = groupRatingsByCredit(ratings || [], selectedTag)

        return (
            <>
                {Object.entries(creditGroups).map(([credit, creditRatings]) => (
                    <TableRow key={`${selectedTag}-${credit}`}>
                        <TableCell colSpan={2} className="p-0">
                            <CreditGroup credit={credit} ratings={creditRatings} tag={selectedTag}/>
                        </TableCell>
                    </TableRow>
                ))}
                {uncreditedItems.map((rating) => (
                    <TableRow key={`${selectedTag}-${rating.name}`}>
                        <TableCell className="font-medium">{rating.name}</TableCell>
                        <TableCell className="text-right">
                            <RatingDisplay value={rating.rating}/>
                        </TableCell>
                    </TableRow>
                ))}
            </>
        )
    }

    if (ratings.length === 0) {
        return <div className="container py-8">Loading ratings...</div>
    }

    return (
        <section className="pb-20">
            <div className="container">
                <div className="mb-6 flex">
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
                    <div className="ml-auto my-auto">
                        <span className="flex">
                        <RatingStar/> = Perfect score
                            </span>
                    </div>
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
                                {selectedTag === "All" ? (
                                    // Grouped by category view
                                    Object.entries(groupedRatings).map(([tag, tagRatings]) => (
                                        <CategorySection key={tag} tag={tag} ratings={tagRatings}/>
                                    ))
                                ) : (
                                    // Filtered view for a specific tag
                                    <FilteredView ratings={groupedRatings[selectedTag] || []}/>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}