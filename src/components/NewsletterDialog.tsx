"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const SUBSTACK_URL = "https://bick.substack.com"

interface NewsletterDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function NewsletterDialog({ open, onOpenChange }: NewsletterDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe to my newsletter</DialogTitle>
          <DialogDescription>Thoughts on engineering, leadership, and building things.</DialogDescription>
        </DialogHeader>
        <iframe
          src={`${SUBSTACK_URL}/embed`}
          title="Subscribe on Substack"
          className="h-[320px] w-full rounded-md border bg-white"
        />
      </DialogContent>
    </Dialog>
  )
}
