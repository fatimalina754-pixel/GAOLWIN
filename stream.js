export default async function handler(req, res) {
  const { streamId, type } = req.query;
  const ext = type === 'ts' ? 'ts' : 'm3u8';
  const url = `http://maventv.one:80/live/nagy4158/elsafti8596/${streamId}.${ext}`;
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', ext === 'ts' ? 'video/mp2t' : 'application/x-mpegURL');
  
  try {
    const response = await fetch(url);
    if (ext === 'm3u8') {
      const data = await response.text();
      // If the m3u8 contains relative paths, they will fail. Assuming absolute paths are returned.
      res.send(data);
    } else {
      const arrayBuffer = await response.arrayBuffer();
      res.send(Buffer.from(arrayBuffer));
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
