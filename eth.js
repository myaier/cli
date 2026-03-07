import { Wallet, verifyMessage } from 'ethers'

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

export const verify = (message, signature, addr) => {
    addr = '0x' + Buffer.from(addr, 'base64url').toString('hex')
    const recoveredAddress = verifyMessage(message, signature)
    return recoveredAddress.toLowerCase() === addr.toLowerCase()
}

export default { generate, load, sign, verify }
