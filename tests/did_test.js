#! /usr/bin/env bun
import { UID, sign } from '../user.js'
import eth from '../eth.js'

console.log(`ETH Address: ${UID}`)

const msg = 'Hello'
const sig = await sign(msg)
console.log('Signed successfully')

const ok = eth.verify(msg, sig, UID)
console.log(`Verify result: ${ok}`)

if (!ok) throw new Error('Verify failed')
