export function generateCardColor() {
    const cardColors = [
        {
            background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        },
        {
            background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
        },
        {
            background: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
        },
        {
            background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
        },
        {
            background: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
        },
        {
            background: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
        },
        {
            background: 'linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)',
        }
    ];

    const idx = Math.floor(Math.random() * cardColors.length);
    return cardColors[idx];
}
