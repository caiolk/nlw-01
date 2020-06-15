import { Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController{

    async index(request: Request, response: Response){

        const pathImage = '/uploads/';
        //const srcUrl = request.protocol + '://' + request.get('host') + pathImage;
        const srcUrl = "http://192.168.25.2:3333" + pathImage;
        const items = await knex('items').select('*');
        
        const serializedItems = items.map(item => {
            return { 
                id: item.id,
                title: item.title,
                image_url:`${srcUrl}${item.image}`
            }
        });
    
        return response.json(serializedItems);
    
    }

}

export default ItemsController;