import { blake3 } from "@3-/blake3"
import { open } from "node:fs/promises"
import { basename } from "node:path"
import req from "../req.js"

export default async (filepath) => {
    const file = await open(filepath),
        stat = await file.stat(),
        stream = file.readableWebStream(),
        name = basename(filepath),
        data = await Bun.file(filepath).arrayBuffer(),
        h = Buffer.from(blake3(new Uint8Array(data))).toString("base64url"),
        mime = Bun.file(filepath).type;

    const res = await req(`http://localhost:3000/put/${h}`, {
        method: "PUT",
        body: stream,
        duplex: "half",
        headers: {
            mime,
            filename: name,
            "content-length": stat.size
        }
    });

    const text = await res.text();
    console.log(text);
};
