const { sql } = require("@vercel/postgres");

const ensureTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS notes (
      id TEXT PRIMARY KEY,
      content TEXT NOT NULL,
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;
};

const readBody = async (req) => {
  if (req.body) {
    return req.body;
  }
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });
};

module.exports = async (req, res) => {
  await ensureTable();

  if (req.method === "GET") {
    const { rows } = await sql`
      SELECT id, content, updated_at
      FROM notes
      ORDER BY updated_at DESC;
    `;
    res.status(200).json({ notes: rows });
    return;
  }

  if (req.method === "POST") {
    const body = await readBody(req);
    const content = (body?.content ?? "").trim();
    if (!content) {
      res.status(400).json({ error: "Missing content" });
      return;
    }

    const id = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
    await sql`
      INSERT INTO notes (id, content, updated_at)
      VALUES (${id}, ${content}, NOW());
    `;

    res.status(200).json({ ok: true, id });
    return;
  }

  if (req.method === "DELETE") {
    const body = await readBody(req);
    const { id } = body || {};
    if (!id) {
      res.status(400).json({ error: "Missing id" });
      return;
    }

    await sql`
      DELETE FROM notes WHERE id = ${id};
    `;

    res.status(200).json({ ok: true });
    return;
  }

  res.setHeader("Allow", ["GET", "POST", "DELETE"]);
  res.status(405).json({ error: "Method not allowed" });
};
