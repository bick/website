import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react"

type SplitTextProps = {
  children: ReactNode
  delay?: number
}

type Piece = {
  content: ReactNode
  isText: boolean
  wrap: (node: ReactNode) => ReactNode
}

// Only these are split further. Anything else animates as one piece.
const SPLITTABLE = new Set(["em", "strong", "span"])

const MAX_DURATION = 0.7

// Every animated piece is its own compositor layer. Past this length the per-character stagger is
// shorter than a frame anyway, so animate whole words on the same timeline.
const MAX_ANIMATED_CHARS = 30

function collectWords(node: ReactNode, words: Piece[][], wrap: Piece["wrap"]) {
  Children.forEach(node, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      String(child)
        .split(/(\s+)/)
        .forEach((token) => {
          if (!token) return
          if (/^\s+$/.test(token)) {
            words.push([])
          } else {
            words[words.length - 1].push({ content: token, isText: true, wrap })
          }
        })
    } else if (isValidElement(child)) {
      const element = child as ReactElement<{ children?: ReactNode }>
      if (typeof element.type === "string" && SPLITTABLE.has(element.type)) {
        collectWords(element.props.children, words, (inner) => wrap(cloneElement(element, undefined, inner)))
      } else {
        words[words.length - 1].push({ content: child, isText: false, wrap })
      }
    }
  })
}

export default function SplitText({ children, delay = 0 }: SplitTextProps) {
  const words: Piece[][] = [[]]
  collectWords(children, words, (node) => node)

  const length = (piece: Piece) => (piece.isText ? Array.from(piece.content as string).length : 1)
  const total = words.flat().reduce((sum, piece) => sum + length(piece), 0)
  const splitChars = total <= MAX_ANIMATED_CHARS
  const stagger = Math.min(0.02, MAX_DURATION / total)

  let index = 0
  const item = (content: ReactNode, key: number, span = 1) => {
    const animationDelay = `${(delay + index * stagger).toFixed(3)}s`
    index += span
    return (
      <span key={key} className="split-item" style={{ animationDelay }}>
        {content}
      </span>
    )
  }

  return (
    <>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span key={wordIndex}>
            {wordIndex > 0 && " "}
            {word.length > 0 && (
              <span className="split-word">
                {word.map((piece, pieceIndex) => (
                  <span key={pieceIndex}>
                    {piece.isText && splitChars
                      ? piece.wrap(Array.from(piece.content as string).map((char, charIndex) => item(char, charIndex)))
                      : item(piece.wrap(piece.content), 0, length(piece))}
                  </span>
                ))}
              </span>
            )}
          </span>
        ))}
      </span>
    </>
  )
}
