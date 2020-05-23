import NotificationService, {NOTIF_WHISHLIST_CHANGED} from '../services/notification-service';


let ns=new NotificationService();
let instance=null;
var whishList=[];

class DataService{

    constructor(){
        if(!instance){
            instance=this;
        }
        return instance;
    }

    addWhishListItem = item => {
        console.log(item);
        whishList.push(item);
        ns.postNotification(NOTIF_WHISHLIST_CHANGED,whishList);
    }

    itemOnWhshList=(item)=>{
        console.log(item)
        for(var x=0;x<whishList.length;x++){
            if (whishList[x]._id === item._id) {
                return true;
            }
        }
        return false;
    }

    removeWhishListItem=(item)=>{
        for(var x=0;x<whishList.length;x++){
            if(whishList[x]._id===item._id){
                whishList.splice(x,1);
                ns.postNotification(NOTIF_WHISHLIST_CHANGED, whishList);
                break;
            }
        }
    }
}

export default DataService;