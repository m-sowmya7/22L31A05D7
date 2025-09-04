import { useState } from 'react';

const URLShortener = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const hashUrl = (url) => {
        let hash = 0;
        for (let i = 0; i < url.length; i++) {
            hash = (hash << 5) - hash + url.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash).toString(36).slice(0, 6);
    }
    const handleShortenUrl = async () => {
        setLoading(true);
        setError('');
        setShortenedUrl('');
        if(!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
            setError('Please enter a valid URL');
            setLoading(false);
            return;
        }
        try {
            const code = hashUrl(originalUrl);
            localStorage.setItem(`shoturl_${code}`, originalUrl);
            const shortUrl = `${window.location.origin}/${code}`;
            setShortenedUrl(shortUrl);
        }
        catch (err) {
            setError('Failed to shorten URL. Please try again.');
            } 
        setLoading(false);
    }
    return (
        <div className="url-shortener-container">
            <h1>URL Shortener</h1>
            <input
                type="text"
                placeholder="Enter URL to shorten"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                className="url-input"
            />
            <button onClick={handleShortenUrl} className="shorten-button" disabled={loading}>
                {loading ? 'Shortening...' : 'Shorten URL'}
            </button>
            {shortenedUrl && (
                <div className="result">
                    <p>Shortened URL:</p>
                    <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                        {shortenedUrl}
                    </a>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
}
export default URLShortener;