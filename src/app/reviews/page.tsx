import type {Metadata} from "next"

import {siteMetadata} from "@/lib/seo"
import ReviewsPage from "./Reviews";

export const metadata: Metadata = siteMetadata.about

export default function Page() {
    return <ReviewsPage/>
}
