import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Stats() {
  const { code } = useParams();
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }
    if (!stats) {
        return <div>No stats available.</div>;
    }

    const fieldsToShow = ["code", "originalUrl", "clicks", "createdAt", "updatedAt"];
    const filteredStats = Object.entries(stats).filter(([key]) => fieldsToShow.includes(key));

    return (
        <div>
            <h2>Stats for {code}</h2>
            <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', marginTop: '1em' }}>
                <tbody>
                    {filteredStats.length > 0 ? (
                        filteredStats.map(([key, value]) => (
                            <tr key={key}>
                                <td style={{ fontWeight: 'bold' }}>{key}</td>
                                <td>{String(value)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan={2}>No relevant stats available.</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Stats;