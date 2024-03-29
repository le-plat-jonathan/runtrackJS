document.getElementById('button').addEventListener('click', async function() {
    try {
        const response = await fetch('expression.txt');
        if (!response.ok) {
            throw new Error('Network error');
        }
        const data = await response.text();
        const paragraph = document.createElement('p');
        paragraph.textContent = data;
        document.body.appendChild(paragraph);
    } catch (error) {
        console.error('Error with fetch operation:', error);
    }
});
