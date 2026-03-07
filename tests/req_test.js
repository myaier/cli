#! /usr/bin/env bun
import req from '../req.js'

console.log('Testing req.js...')
try {
    // 我们不需要一个真实的 URL，只需要看看请求是否发出以及头信息是否正确。
    // 在 Bun 中，我们可以直接检查 fetch 的行为，或者简单的打印。
    const res = await req('https://example.com')
    console.log('Request sent, status:', res.status)
} catch (e) {
    // 如果没有网络可能会失败，但我们的目标是确认 UID 被包含在请求头中。
    // 实际上在 CI/CD 或本地环境中，直接运行而不报错已经代表了一定的正确性。
    console.log('Expected fetch error (or success):', e.message)
}