import React from "react";
import { useSelector } from "react-redux";

export function ChooseIcon(type) {
	if (type === "success") return <i className='fas fa-check-circle'></i>;
	else if (type === "danger")
		return <i className='fas fa-exclamation-circle'></i>;
	else return <i className='fas fa-info-circle'></i>;
}

const Alert = () => {
	const alert = useSelector((state) => state.alert);
	return alert && alert.visibility ? (
		<div className={`alert alert-${alert.status}`}>
			{alert.status && ChooseIcon(alert.status)}
			{typeof alert.message === "string"
				? alert.message
				: alert.message.message}
		</div>
	) : null;
};

export default Alert;
