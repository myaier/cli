import { UID, sign } from '../user.js'
import base64url from '../../src/lib/base64url.js'

export default async () => {
    const ts = Buffer.allocUnsafe(8)
    ts.writeBigInt64LE(BigInt(Date.now()))

    const sig = await sign(ts)
    const sigBin = Buffer.from(sig.slice(2), 'hex')

    return base64url(Buffer.concat([UID, ts, sigBin]))
}
