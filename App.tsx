import React, { useState } from 'react';
import { getRecommendations } from './recommendation-app/src/recommendationService';

const App: React.FC = () => {
    const [productName, setProductName] = useState<string>('');
    const [recommendations, setRecommendations] = useState<string[]>([]);

    const handleRecommend = async () => {
        const result = await getRecommendations(productName);
        setRecommendations(result);
    };

    return (
        <div>
            <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <button onClick={handleRecommend}>Get Recommendations</button>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
