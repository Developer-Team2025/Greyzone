export const edit  = (data: string) => {
    return data.toLowerCase().split(' ').join('-')
}

export const debounce = (func: (...args: any[]) => void, timeout: number) => {
    let timer: NodeJS.Timeout;
    
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), timeout);
    };
};