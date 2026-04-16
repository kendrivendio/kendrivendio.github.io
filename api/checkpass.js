export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  const correct = process.env.UPLOAD_PASSWORD;
  const given   = req.body?.password;

  if (!correct) {
    return res.status(500).json({ ok: false, error: 'Server misconfigured' });
  }

  return res.status(200).json({ ok: given === correct });
}
