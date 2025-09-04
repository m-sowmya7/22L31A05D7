import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Redirect = () => {
    const { code } = useParams();
    useEffect(() => {
        const originalUrl = localStorage.getItem(`shoturl_${code}`);
        if(originalUrl) {
            window.location.replace(originalUrl);
        }
    }, [code]);
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Redirecting...</h2>
            <p>If you are not redirected automatically, please check the URL or create a new shortened URL.</p>
        </div>
    );
}
export default Redirect;