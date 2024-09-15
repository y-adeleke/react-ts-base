//using store

import { useStore } from "@/store/store";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

function Home() {
  const { userEmail } = useStore(
    useShallow((state) => ({
      userEmail: state.email,
    }))
  );

  //subscription
  useEffect(() => {
    const unSub = useStore.subscribe(
      (state) => state.email,
      (email) => {},
      { fireImmediately: true }
    );
    return unSub;
  }, []);

  return (
    <div className="mt-1">
      <h1>Home</h1>
      <p>Welcome to the Home pagem {userEmail}.</p>
    </div>
  );
}

export default Home;
