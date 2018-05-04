import Menus from '../models/menu';

const menus = Menus;

class Menu {
	getMenus(req,res){
		return res.status(200).json({
			menu: menus,
			error: false
		});
	}

	addMenu(req,res){
		if(!req.body.menuName){
		  return res.status(404).json({
		  	message: 'name of menu missing',
		  	error: true
		  });	
		}

		menus.push(req.body)
		return res.status(200).json({
			message: 'Success',
			error: false
		});
		}

	getMenu(req,res){
		menus.map(menu =>{
			if(menu.menuid === parseInt(req.params.menuid, 10)){
				return res.status(200).json({
					menu: menu,
					message: 'success',
					error: false
				});
			}
		});
		return res.status(404).json({
			message: 'menu not found',
			error: true
		});
	}	
}

const menuController = new Menu();
export default menuController;