"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"

// Hand-drawn single-stroke cursive "Owen Bick", drawn on with a pathLength animation.
const OWEN =
  "M 78 48 C 64 36, 42 44, 36 66 C 30 90, 42 110, 62 110 C 82 110, 96 92, 94 68 C 92 50, 80 42, 72 50 C 70 60, 78 74, 90 82 C 98 88, 108 86, 114 78 C 112 90, 112 102, 120 104 C 127 106, 133 96, 136 80 C 136 94, 140 105, 147 105 C 154 105, 159 94, 162 78 C 162 84, 166 88, 172 86 C 176 85, 180 88, 182 94 C 186 98, 192 86, 196 76 C 197 68, 190 66, 186 72 C 181 79, 182 92, 188 100 C 193 106, 201 103, 207 95 C 212 88, 218 78, 222 74 C 220 84, 217 98, 216 106 C 220 92, 228 78, 236 74 C 243 71, 246 76, 245 83 C 244 92, 242 100, 242 105 C 245 109, 252 105, 258 96"

const BICK =
  "M 322 44 C 324 60, 320 88, 310 108 C 318 82, 332 52, 344 44 C 354 38, 362 42, 362 52 C 362 64, 350 74, 338 76 C 350 74, 362 78, 362 90 C 362 102, 350 110, 338 108 C 330 107, 326 102, 328 96 C 340 93, 354 89, 366 87 C 374 88, 380 80, 384 76 C 383 86, 381 98, 382 104 C 384 108, 392 104, 398 86 C 404 80, 412 76, 419 80 C 410 74, 402 78, 399 86 C 395 95, 399 105, 407 107 C 412 108, 418 105, 421 101 C 428 96, 438 78, 444 58 C 448 44, 452 36, 457 38 C 462 40, 460 52, 456 64 C 450 84, 444 100, 440 108 C 444 96, 450 84, 458 80 C 463 78, 466 80, 464 84 C 461 89, 455 91, 451 90 C 456 92, 462 98, 466 104 C 469 108, 476 106, 482 98"

const I_DOT = "M 389 62 C 390 60, 392 60, 393 61"

type SignatureProps = {
  className?: string
}

export default function Signature({ className }: SignatureProps) {
  const reducedMotion = useReducedMotion()

  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }

  return (
    <svg viewBox="26 28 470 92" className={className} aria-hidden="true">
      {reducedMotion ? (
        <g>
          <path d={OWEN} {...stroke} />
          <path d={BICK} {...stroke} />
          <path d={I_DOT} {...stroke} />
        </g>
      ) : (
        <g>
          <motion.path
            d={OWEN}
            {...stroke}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            d={BICK}
            {...stroke}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.0, delay: 1.9, ease: "easeInOut" }}
          />
          <motion.path
            d={I_DOT}
            {...stroke}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.95 }}
          />
        </g>
      )}
    </svg>
  )
}
