import { Wallet, verifyMessage } from 'ethers'
import u8eq from '@3-/u8/u8eq.js'

export const generate = () => {
    const wallet = Wallet.createRandom()
    return {
        id: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase
    }
}

export const load = (privateKey) => new Wallet(privateKey)

export const sign = async (wallet, message) => await wallet.signMessage(message)

export const verify = (message, signature, u8) => {
    const recoveredAddress = verifyMessage(message, signature)
    const recoveredBin = Buffer.from(recoveredAddress.slice(2), 'hex')
    return u8eq(recoveredBin, u8)
}

export default { generate, load, sign, verify }
