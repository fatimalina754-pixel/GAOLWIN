export default async function handler(req, res) {
  const { action, category_id } = req.query;
  const base = 'http://maventv.one:80/player_api.php';
  const params = `username=nagy4158&password=elsafti8596&action=${action}${category_id ? '&category_id=' + category_id : ''}`;
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  try {
    const response = await fetch(`${base}?${params}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
