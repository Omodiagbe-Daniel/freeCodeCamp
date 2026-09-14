const fs = require("fs");
console.log(fs);

console.log(fs.readFileSync("assets/poem.txt", { encoding: "utf8"}));
fs.readFile("assets/poem.txt", { encoding: "utf8" }, (err, data) => {
    console.log(data);
})

const myPromises = require("fs/promises");
const { buffer } = require("stream/consumers");

async function
 main () {
    const data = await myPromises.readFile("assets/poem.txt", { encoding: "utf8", });
    console.log(data);
}

main()

fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");
fs.appendFileSync("assets/output.txt", "\nBackend Tutorial");

console.log(fs.existsSync("assets/output.txt"));
console.log(fs.readdirSync("assets"));

const buf = Buffer.from("Hello, Node!");
console.log(buf);
console.log(buf.toString("hex"));
console.log(buf.toString("base64"));

const buf2 = Buffer.alloc(8, 0xff);
console.log(buf2);

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded);

const crypto = require("crypto");
const hash = crypto.createHash("sha256").update("freeCodeCamp!").digest("hex");
console.log(hash);

const random = crypto.randomBytes(16).toString("hex");
console.log(random);

const id = crypto.randomUUID();
console.log(id);

const os = require("os");
console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.cpus().length);

const path = require("path");
const { serialize } = require("v8");
const { Server } = require("http");
const filePath = path.join(__dirname, "assets", "poem.txt");
console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.join("assets", "..", "server.js"));
console.log(path.resolve("assets", "..", "server.js"))
console.log(path.parse(filePath));

path.parse(filePath);

console.log(process.version);
console.log(process.platform);
console.log(process.env.NODE_ENV);

console.log(process.argv);

process.stdout.write("Hello from stdout\n");
process.stderr.write("Hello from stderr\n");

const readable = fs.createReadStream("assets/poem.txt", { encoding: "utf8" });
readable.on("data", (chunk) => {
    console.log(chunk);
});
readable.on("end", () => {
    console.log("Done reading");
});

const writable = fs.createWriteStream("assets/stream-output.txt");

readable.pipe(writable);
