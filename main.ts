import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (context, next) => {
    const root = `${Deno.cwd()}/static`
    try {
        await context.send({ root, index: "index.html"})
    } catch {
        next()
    }
})

await app.listen({ port: 8082 });
