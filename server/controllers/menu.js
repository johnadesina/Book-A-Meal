import Menus from '../models/menu';

const menus = Menus;

class Menu {
	get(req,res){
		return res.json({
			menu: menus,
			error: false
		});

	}

	add(req,res){
		if(!req.body.menuName){
		  return res.json({
		  	message: 'name of menu missing',
		  	error: true
		  });	
		}

		menus.push(req.body)
		return res.json({
			message: 'Success',
			error: false
		});

		}


	getA(req,res){
		for(let i=0; i < menus.length; i++){
			if(menus[i].menuid === parseInt(req.params.menuid, 10)){
				return res.json({
					menu: menus[i],
					message: 'success',
					error: false
				});
			}
		}
		return res.status(404).json({
			message: 'menu not found',
			error: true
		});
	}	

}


const menuController = new Menu();
export default menuController;