export function getCurrencyStyles(currency) {
    const styles = {
        'ETH': {
            background: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
            color: '#111727',
        },
        'DOGE': {
            background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
            color: '#111727',
        },
        'BTC': {
            background: 'linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)',
            color: '#111727',
        }
    }

    return styles[currency];
}
