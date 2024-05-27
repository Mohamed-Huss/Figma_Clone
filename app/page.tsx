import dynamic from "next/dynamic";

const ComponentC = dynamic(() => import("./App"), { ssr: false });

export default App;
