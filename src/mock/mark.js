const MAP_MARK_ICON_NORMAL = 'image://data:image/png;base64,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'
const MAP_MARK_ICON_WARNING = 'image://data:image/png;base64,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'

export function markIconImage(value) {
  const tmpValue = value[2]

  if (tmpValue > 100) {
    return MAP_MARK_ICON_WARNING
  } else {
    return MAP_MARK_ICON_NORMAL
  }
}