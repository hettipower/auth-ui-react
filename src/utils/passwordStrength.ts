export function scorePassword(pw: string): number {
    let score = 0
    if (!pw) return score
    // length
    score += Math.min(10, pw.length) * 6
    // variety
    if (/[a-z]/.test(pw)) score += 10
    if (/[A-Z]/.test(pw)) score += 10
    if (/[0-9]/.test(pw)) score += 10
    if (/[^\w\s]/.test(pw)) score += 10
    return Math.min(score, 100)
}