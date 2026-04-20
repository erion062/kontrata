const { sql } = require("@vercel/postgres");

const ensureTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT,
      status TEXT NOT NULL,
      notes TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;
};

const readBody = async (req) => {
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
      SELECT id, name, phone, status, notes, created_at, updated_at
      FROM leads
      ORDER BY updated_at DESC;
    `;
    res.status(200).json({ leads: rows });
    return;
  }

  if (req.method === "POST") {
    const body = await readBody(req);
    const { name, phone, status, notes } = body || {};
    if (!name || !status) {
      res.status(400).json({ error: "Missing fields" });
      return;
    }

    const id = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
    await sql`
      INSERT INTO leads (id, name, phone, status, notes)
      VALUES (${id}, ${name}, ${phone ?? ""}, ${status}, ${notes ?? ""});
    `;

    res.status(200).json({ ok: true, id });
    return;
  }

  if (req.method === "PUT") {
    const body = await readBody(req);
    const { id, name, phone, status, notes } = body || {};
    if (!id) {
      res.status(400).json({ error: "Missing id" });
      return;
    }

    await sql`
      UPDATE leads
      SET name = ${name ?? ""},
          phone = ${phone ?? ""},
          status = ${status ?? ""},
          notes = ${notes ?? ""},
          updated_at = NOW()
      WHERE id = ${id};
    `;

    res.status(200).json({ ok: true });
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
      DELETE FROM leads WHERE id = ${id};
    `;

    res.status(200).json({ ok: true });
    return;
  }

  res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
  res.status(405).json({ error: "Method not allowed" });
};
