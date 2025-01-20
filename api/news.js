export default async function handler(req, res) {
    const apiKey = process.env.NEWSAPI_KEY; // Use the environment variable for your key
    const baseUrl = `https://newsapi.org/v2/top-headlines`;
    const country = req.query.country || 'us'; // Default to 'us'
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;
    const category = req.query.category || '';
    const q = req.query.q || '' ;

    // const url = `${baseUrl}?country=${country}&apiKey=${apiKey}`;
    const url = `${baseUrl}?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}&category=${category}&q=${q}`;
    console.log(url,'base url from api folder')

    try {
        const response = await fetch(url);
        if (!response.ok) {
        if (response.status === 401) throw new Error('Invalid API Key');
        if (response.status === 429) throw new Error('Rate Limit Exceeded');
        throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();


        //Ensure that each request generates fresh results, especially since news data may change frequently. Add headers to disable caching
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.setHeader('Expires', '0');
        res.setHeader('Pragma', 'no-cache');
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
