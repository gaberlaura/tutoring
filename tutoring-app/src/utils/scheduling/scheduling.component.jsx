import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

import './scheduling.styles.scss';

const Scheduling = () => {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi();
			cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
		})();
	}, [])
	return (
		<div>
			<h1 className="scheduling-header">Appointments</h1>
			<button
				className="scheduling-button"
				data-cal-link="laura-g-lwcb7j/30min"
				data-cal-config='{"layout":"month_view"}'
			>Schedule appointment</button>
			<h2>**Please check your email for appointment confirmations**</h2>
		</div>
	)
}

export default Scheduling;