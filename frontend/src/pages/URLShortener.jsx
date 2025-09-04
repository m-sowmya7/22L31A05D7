import { useState } from 'react';
<<<<<<< HEAD
=======
import Logger from '../../../logging-middleware/src/index.js';
>>>>>>> ae96dd7 (Push all project contents)

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
<<<<<<< HEAD
        }
        catch (err) {
            setError('Failed to shorten URL. Please try again.');
            } 
        setLoading(false);
    }
=======

            Logger.Log(
                "frontend", 
                "info",    
                "api",     
                `Shortened URL: ${originalUrl} to ${shortUrl}` 
            );
        }
        catch (err) {
            setError('Failed to shorten URL. Please try again.');
        }
        setLoading(false);
    }
    const getAllStats = () => {
        const stats = [];
        for (let key in localStorage) {
            if (key.startsWith('shoturl_')) {
                const code = key.replace('shoturl_', '');
                const url = localStorage.getItem(key);
                stats.push({ code, url });
            }
        }
        return stats;
    };

    const allStats = getAllStats();

>>>>>>> ae96dd7 (Push all project contents)
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
<<<<<<< HEAD
=======

            <div style={{ marginTop: '2em' }}>
                <h2>All Shortened URLs & Stats</h2>
                {allStats.length === 0 ? (
                    <p>No stats available.</p>
                ) : (
                    <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', marginTop: '1em' }}>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Original URL</th>
                                <th>Short URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allStats.map(({ code, url }) => (
                                <tr key={code}>
                                    <td>{code}</td>
                                    <td>{url}</td>
                                    <td><a href={`/${code}`} target="_blank" rel="noopener noreferrer">{window.location.origin + '/' + code}</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
>>>>>>> ae96dd7 (Push all project contents)
        </div>
    );
}
export default URLShortener;