import {atom, selector} from 'recoil'
import axios from 'axios'

// Asynchronous Queries in Recoil
// Atom cannot have a function in its default value or a async work... so selector is used
// Selectors are also called idempotent functions for this.

export const NotificationAtom = atom({
    key:"NotificationAtom",
    default: selector({
        key:"NotificationAtomSelector",
        get: async () => {
            // Artificial Delay
            await new Promise(r => setTimeout(r,5000))
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=>{
        const allNotifications = get(NotificationAtom);
        
        return allNotifications.jobs + allNotifications.messaging + allNotifications.network + allNotifications.notifications;
    }
})