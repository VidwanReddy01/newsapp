export default async function handler(req, res) {
    const apiKey = process.env.NEWSAPI_KEY; // Use the environment variable for your key
    const baseUrl = `https://newsapi.org/v2/top-headlines`;
    const country = req.query.country || 'us'; // Default to 'us'
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;

    // const url = `${baseUrl}?country=${country}&apiKey=${apiKey}`;
    const url = `${baseUrl}?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
