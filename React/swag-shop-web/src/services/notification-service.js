export const NOTIF_WHISHLIST_CHANGED="nofif_whishlist_changed";

var observers={};
var instance=null;
class NotificationService{
    constructor(){
        if(!instance){
            instance=this;
        }
        return instance;
    }

    removeObserver=(notifName,observer)=>{
        var obs=observers[notifName];
        if(obs){
            for(var x;x<observers.length;x++){
                if(obs[x].observer===observer){
                    obs.splice(x,1);
                    observers[notifName]=obs;
                    break;
                }
            }
        }
    }

    postNotification=(notifName ,data)=>{
        let obs=observers[notifName];
        for(var x=0;x<obs.length;x++){
            var obj=obs[x];
            obj.callback(data);
        }
    }

    addObserver=(notifName,observer,callback)=>{
        let obs=observers[notifName];

        if(!obs){
            observers[notifName]=[];
        }

        let obj={observer:observer,callback:callback};
        observers[notifName].push(obj);
    }
}

export default NotificationService;