import axios from 'axios';

const img = size =>
    `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`;

export async function fetchSkipsByLocation(postcode, area = 'Lowestoft') {
    const qs =
        `postcode=${encodeURIComponent(postcode)}` +
        (area ? `&area=${encodeURIComponent(area)}` : '');

    const { data } = await axios.get(
        `https://app.wewantwaste.co.uk/api/skips/by-location?${qs}`
    );

    return data.map(s => ({
        id:        s.id,
        size:      s.size,
        hirePeriod:s.hire_period_days,
        price:     s.price_before_vat,
        roadBan:   !s.allowed_on_road,
        img:       img(s.size)
    }));
}
