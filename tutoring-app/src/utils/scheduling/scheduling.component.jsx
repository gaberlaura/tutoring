import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Scheduling = () => {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <button
	  data-cal-link="laura-g-lwcb7j/30min"
    
	  data-cal-config='{"layout":"month_view"}'
	  >Schedule appointment</button>;
  }

  export default Scheduling;