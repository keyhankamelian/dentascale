#!/usr/bin/env bash
#
# Generate a personalized proposal PDF.
#
#   ./scripts/make-proposal.sh "Dr. Tania Ohebsion" "Ohebsion Orthodontics"
#   ./scripts/make-proposal.sh "Dr. Smith"                # doctor only
#   ./scripts/make-proposal.sh                            # generic version
#
# Requires the dev server to be running (npm run dev) on $PORT (default 3000).
# Output lands in ./proposals/ as a dated, per-practice PDF.

set -euo pipefail

DOCTOR="${1:-}"
PRACTICE="${2:-}"
PORT="${PORT:-3000}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [[ ! -x "$CHROME" ]]; then
  echo "Google Chrome not found at: $CHROME" >&2
  exit 1
fi

if ! curl -sf -o /dev/null "http://localhost:$PORT/proposal/sheet"; then
  echo "No dev server on port $PORT. Start one with: npm run dev" >&2
  exit 1
fi

# URL-encode via jq if available, else fall back to a simple space swap.
encode() {
  if command -v jq >/dev/null 2>&1; then
    printf '%s' "$1" | jq -sRr @uri
  else
    printf '%s' "$1" | sed 's/ /%20/g'
  fi
}

URL="http://localhost:$PORT/proposal/sheet"
QUERY=""
[[ -n "$DOCTOR" ]] && QUERY="doctor=$(encode "$DOCTOR")"
[[ -n "$PRACTICE" ]] && QUERY="${QUERY:+$QUERY&}practice=$(encode "$PRACTICE")"
[[ -n "$QUERY" ]] && URL="$URL?$QUERY"

# Filename: practice, else doctor, else "generic" — slugified.
LABEL="${PRACTICE:-${DOCTOR:-generic}}"
SLUG="$(printf '%s' "$LABEL" \
  | tr '[:upper:]' '[:lower:]' \
  | sed -E -e 's/[^a-z0-9]+/-/g' -e 's/^-+//' -e 's/-+$//')"

mkdir -p proposals
OUT="proposals/DentaScale-Proposal-${SLUG}-$(date +%Y-%m-%d).pdf"

"$CHROME" \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$OUT" \
  "$URL" 2>/dev/null

echo "$OUT"
