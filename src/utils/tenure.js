const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function parseMonthYear(str) {
  const [monthStr, yearStr] = str.trim().split(' ')
  const month = MONTHS.indexOf(monthStr)
  const year = parseInt(yearStr, 10)
  if (month === -1 || Number.isNaN(year)) return null
  return { month, year }
}

export function getTenure(period) {
  const [startStr, endStr] = period.split('–')
  if (!startStr || !endStr) return null

  const start = parseMonthYear(startStr)
  const end = parseMonthYear(endStr)
  if (!start || !end) return null

  const totalMonths = (end.year - start.year) * 12 + (end.month - start.month)
  if (totalMonths < 0) return null

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const parts = []
  if (years > 0) parts.push(`${years} yr${years === 1 ? '' : 's'}`)
  if (months > 0) parts.push(`${months} mo${months === 1 ? '' : 's'}`)

  return parts.length ? parts.join(' ') : '< 1 mo'
}
