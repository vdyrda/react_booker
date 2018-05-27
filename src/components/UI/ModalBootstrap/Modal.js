import React from 'react';

import './Modal.css';

const modal = (props) => {
	const header = props.header ?
		<div className="modal-header">
			<h5 className="modal-title">{props.header}</h5>
			<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		:
		null;

	const body = props.children ? <div className="modal-body">{props.children}</div> : null;

	return (
		<div className="modal fade" id="Modal" tabIndex="-1" role="dialog"  aria-labelledby="confirm" aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					{header}
					{body}
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default modal