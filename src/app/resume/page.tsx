import type {Metadata} from "next"

import ResumePage from "./Resume"
import {siteMetadata} from "@/lib/seo"

export const metadata: Metadata = siteMetadata.resume

export default function Page() {
    return <ResumePage/>
}
