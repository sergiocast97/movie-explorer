import { describe, expect, it } from 'vitest'
import { stripHtml } from '@/utils/stripHtml'

describe('stripHtml', () => {
  it('Turn HTML into plain text', () => {
    const input = '<p>Hello <strong>World</strong>!</p>'
    const output = stripHtml(input)
    expect(output).toBe('Hello World!')
  })

  it('Conserve plain text', () => {
    const input = 'Plain text'
    const output = stripHtml(input)
    expect(output).toBe('Plain text')
  })

  it('Return empty pain text', () => {
    const input = ''
    const output = stripHtml(input)
    expect(output).toBe('')
  })

  it('Purposely passing null', () => {
    const input = null as unknown as string
    const output = stripHtml(input)
    expect(output).toBe('')
  })
})
