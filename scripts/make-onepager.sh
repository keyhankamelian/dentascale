#!/usr/bin/env bash
#
# Render the one-page leave-behind to PDF. Unpersonalized by design — this is
# the copy printed in bulk and handed to a front desk during a walk-in.
#
#   ./scripts/make-onepager.sh
#   OUT_DIR=~/Downloads ./scripts/make-onepager.sh
#
# Requires the dev server (npm run dev) on $PORT (default 3000).

set -euo pipefail

PORT="${PORT:-3000}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [[ ! -x "$CHROME" ]]; then
  echo "Google Chrome not found at: $CHROME" >&2
  exit 1
fi

if ! curl -sf -o /dev/null "http://localhost:$PORT/proposal/onepager"; then
  echo "No dev server on port $PORT. Start one with: npm run dev" >&2
  exit 1
fi

OUT_DIR="${OUT_DIR:-proposals}"
mkdir -p "$OUT_DIR"
OUT="$OUT_DIR/DentaScale-One-Pager.pdf"

"$CHROME" \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$OUT" \
  "http://localhost:$PORT/proposal/onepager" 2>/dev/null

echo "$OUT"
