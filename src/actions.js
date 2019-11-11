export const getResult = (options) => {
    
    const { type, A, B, C, D, E, F } = options
    let H = 'error';
    let K = null;
    if (A && B && !C) {
        H = 'M'
    }
    if (A && B && C) {
        H = 'P'
    }
    if (!A && B && C) {
        H = 'T'
    }
    if (type === 'Custom2') {
        if (A && B && !C) {
            H = 'T'
        }
        if (A && !B && C) {
            H = 'M'
        }
    }
    if (H === 'M') {
        if (type === 'Custom2') {
            K = F + D + D * E / 100
        } else {
            K = D + D * E / 10;
        }
    }
    if (H === 'P') {
        if (type === 'Custom1') {
            K = 2 * D + D * E / 100;
        } else {
            K = D + D * (E - F) / 25.5;
        }
    }
    if (H === 'T') {
        K = D - D * F / 10;
    }
    return { H, K, options }
}
