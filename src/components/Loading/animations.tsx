"use client"

import React from "react"

import styles from "./layout.module.css"

interface LayoutProps {
  children: React.ReactNode
}

export function TextAnimation({ children }: LayoutProps) {
  return <div className={styles.layout}>{children}</div>
}

export function ImageAnimation({ children }: LayoutProps) {
  return <div className={styles.layout}>{children}</div>
}
