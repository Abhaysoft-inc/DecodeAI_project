export const fetchResources = async () => {
    const response = await fetch('https://cp-handbook.netlify.app/');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};