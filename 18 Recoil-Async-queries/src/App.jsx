import React from "react";
import {useRecoilValue, useSetRecoilState, RecoilRoot, useRecoilState} from 'recoil'
import { NotificationAtom, totalNotificationSelector} from "./store/atoms/notificationCount";
import { useEffect } from "react";

function App() {
  const [notificationCount, setNotificationCount] = useRecoilState(NotificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(()=> {
    fetch("")
      .then( async (res) => {
        const json = await res.json();
        setNotificationCount(json);
      })
  },[])

  // See in chapter 17, we can handle async queries like these..of accessing database or fetching via api through selectors as well

  return (
    <>
        <button>Jobs({notificationCount.jobs})</button>
        <button>Messaging({notificationCount.messaging})</button>
        <button>Network({notificationCount.network})</button>
        <button>Notifications({notificationCount.notifications})</button>
        <button>All Notifications ({totalNotificationCount})</button>
    </>
  )
}

export default App
