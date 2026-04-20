const { sql } = require("@vercel/postgres");

const ensureTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS scripts (
      id TEXT PRIMARY KEY,
      sections JSONB NOT NULL,
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;
};

module.exports = async (req, res) => {
  if (req.method === "GET") {
    await ensureTable();
    const { rows } = await sql`
      SELECT sections, updated_at
      FROM scripts
      WHERE id = 'trimmr-script'
      LIMIT 1;
    `;
    const stored = rows[0];
    res.status(200).json({
      sections: stored?.sections ?? null,
      updatedAt: stored?.updated_at ?? null,
    });
    return;
  }

  if (req.method === "POST") {
    const { sections } = req.body || {};
    if (!Array.isArray(sections)) {
      res.status(400).json({ error: "Invalid payload" });
      return;
    }

    await ensureTable();
    await sql`
      INSERT INTO scripts (id, sections, updated_at)
      VALUES ('trimmr-script', ${JSON.stringify(sections)}::jsonb, NOW())
      ON CONFLICT (id)
      DO UPDATE SET sections = EXCLUDED.sections, updated_at = NOW();
    `;

    res.status(200).json({ ok: true });
    return;
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).json({ error: "Method not allowed" });
};
