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
      SELECT content, updated_at
      FROM notes
      WHERE id = 'trimmr-notes'
      LIMIT 1;
    `;
    const stored = rows[0];
    res.status(200).json({
      content: stored?.content ?? "",
      updatedAt: stored?.updated_at ?? null,
    });
    return;
  }

  if (req.method === "POST") {
    const body = await readBody(req);
    const content = body?.content ?? "";

    await sql`
      INSERT INTO notes (id, content, updated_at)
      VALUES ('trimmr-notes', ${content}, NOW())
      ON CONFLICT (id)
      DO UPDATE SET content = EXCLUDED.content, updated_at = NOW();
    `;

    res.status(200).json({ ok: true });
    return;
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).json({ error: "Method not allowed" });
};
