"use client"

import React, { ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  // Reset loading state on route change
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // Adjust this timing to match your needs

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && (
          <>
            {/* Top bar */}
            <motion.div
              key="top"
              initial={{ height: "50vh" }}
              animate={{
                height: "50vh",
                y: "0%",
              }}
              exit={{
                y: "-100%",
                transition: {
                  duration: 0.4,
                  ease: [0.65, 0, 0.35, 1],
                },
              }}
              className="fixed left-0 top-0 z-50 w-full bg-black"
            />

            {/* Bottom bar */}
            <motion.div
              key="bottom"
              initial={{ height: "50vh" }}
              animate={{
                height: "50vh",
                y: "0%",
              }}
              exit={{
                y: "100%",
                transition: {
                  duration: 0.4,
                  ease: [0.65, 0, 0.35, 1],
                },
              }}
              className="fixed bottom-0 left-0 z-50 w-full bg-black"
            />
          </>
        )}
      </AnimatePresence>

      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
        }}
      >
        {children}
      </motion.main>
    </div>
  )
}

// Optional: Add a hook to manually trigger transitions
export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const triggerTransition = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }

  return { isTransitioning, triggerTransition }
}
