import read from '@3-/read'
import write from '@3-/write'
import eth from './eth.js'
import { join } from 'path'
import { homedir } from 'os'

const PATH = join(homedir(), ".config/aier/uid.key"),
    init = async () => {
        const data = eth.generate(),
            config = { password: crypto.randomUUID().replace(/-/g, ''), ...data };
        write(PATH, JSON.stringify(config))
        return eth.load(data.privateKey)
    },
    load = async () => {
        const config = JSON.parse(read(PATH))
        return eth.load(config.privateKey)
    },
    wallet = await load().catch(init);


export const UID = Buffer.from(wallet.address.slice(2), 'hex'),
    sign = (message) => eth.sign(wallet, message)
