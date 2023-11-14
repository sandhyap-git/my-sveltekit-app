import {error} from '@sveltejs/kit';

export async function load({ params }) {
    const url = 'http://apigatewaytest.logitech.com:4502/content/logitech/amr/live/en_us/products/mice.model.json';
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: 'Basic ' + Buffer.from('admin:admin').toString('base64'),
            },
        });
       
        if (response.ok) {           
            const json = await response.json();
            return {
                aemdata: json[':items'].body[':items'].responsivegrid[':items']
            };
        }
    } catch (err) {
        throw error(404);
    }
}