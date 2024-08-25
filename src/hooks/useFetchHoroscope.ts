import { useState, useEffect } from 'react';

const useFetchHoroscope = (sign: string, language: string) => {
    const [horoscope, setHoroscope] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!sign) return;

        setLoading(true);

        fetch('https://poker247tech.ru/get_horoscope/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sign: sign.toLowerCase(),
                language: language === 'ru' ? 'original' : 'translated',
                period: 'today',
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setHoroscope(data.horoscope || 'No description available.');
                setLoading(false);
            })
            .catch((err) => {
                console.error("Ошибка при запросе гороскопа:", err);
                setHoroscope('Ошибка при получении данных');
                setLoading(false);
            });
    }, [sign, language]);

    return { horoscope, loading };
};

export default useFetchHoroscope;
